import 'babel-polyfill';
import Base from './Lottery/base.js';
import Timer from './Lottery/timer.js';
import Calculate from './Lottery/calculate.js';
import Interface from './Lottery/interface.js';
import $ from 'jquery';

//实现深拷贝
const copyProperties = function(target, source) {
    for(let key of Reflect.ownKeys(source)) {       //有时候用Object无法拿到的，就用Reflect来拿到原对象的所有属性
        if(let key!=='constructor' && key!=='prototype' && key!=='name'){       //复制的时候要选择性的拷贝，去掉3个属性
            let desc = Object.getOwnPropertyDescriptor(source, key);        // 获取指定对象的自身属性描述符
            Object.defineProperty(target, key, desc);    //复制到目标对象上（ES5的方法）
        }
    }
}

//多重继承的方法
const mix = function(...mixins) {
    class Mix{}     //声明一个空的类
    for(let mixin of mixins){
        copyProperties(Mix, mixin);     //深度拷贝
        copyProperties(Mix.prototype, mixin.prototype);     //深度拷贝原型
    }
    return Mix;
}

//综合模块
class Lottery extends mix(Base, Calculate, Interface, Timer) {      //通过mix返回一个类
    constructor(name='ssy', cname='11选5', issue='**', state='**') {
        super();    //实现类的继承要放在前面
        this.name = name;
        this.cname = cname;
        this.issue = issue;
        this.state = state;
        this.el = '';       //当前的选择器
        this.omit = new Map();      //遗漏号码
        this.open_code = new Set();     //开奖号码
        this.open_code_list = new Set();    //开奖记录
        this.play_list = new Map();     //玩法类型
        this.number = new Set();        //选号
        this.issue_el = '#curr_issue';      //期号选择器
        this.countdown_el = '#countdown';   //倒计时选择器
        this.state_el = '.state_el';         //状态选择器
        this.cart_el = '.codelist';         //购物车选择器
        this.omit_el = '';                  //遗漏选择器
        this.cur_play = 'r5';           //初始化玩法
        this.initPlayList();            //
        this.initNumber();
        this.updateState();
        this.initEvent();
    }

    /**
     * [updateState 状态更新]
     * @return {[type]} [description]
     */
    updateState(){
        let self=this;
        this.getState().then(function(res){  // getState()是接口里的方法
            self.issue=res.issue; //拿到期号
            self.end_time=res.end_time; //拿到截止时间
            self.state=res.state; //拿到状态
            $(self.issue_el).text(res.issue); //更新期号
            self.countdown(res.end_time,function(time){ //更新倒计时
                $(self.countdown_el).html(time)     //倒计时结束更新时间
            },function(){ //重新获取
                setTimeout(function () {
                    self.updateState();     //重新获取当前最新的销售状态
                    self.getOmit(self.issue).then(function(res){    //重新获取当前最新的遗漏

                    });
                    self.getOpenCode(self.issue).then(function(res){    //重新获取当前最新的奖号

                    })
                }, 500);
            })
        })
    }

    /**
     * [initEvent 初始化事件]
     * @return {[type]} [description]
     */
    initEvent(){
        let self=this;          //使用bind绑定到对象上
        $('#plays').on('click','li',self.changePlayNav.bind(self));     //完成玩法的切换
        $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));   //号码的选中
        $('#confirm_sel_code').on('click',self.addCode.bind(self));     //添加号码
        $('.dxjo').on('click','li',self.assistHandle.bind(self));       //操作区，大小奇偶
        $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));     //随机号码
    }
}

export default Lottery;