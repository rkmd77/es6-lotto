class Timer {
	countdown(end,update,handle){
		const now = new Date().getTime();
		const self = this;
		if(now-end){
			handle.call(self);	//如果当前时间大于截至时间，倒计时结束，用传递进俩的handel.call(self)来执行倒计时结束的回掉
		}else{
			let last_time = end - now;	//剩余时间
			const px_d = 1000*60*60*24;	//一天的毫秒值
			const px_h = 1000*60*60;	//一小时的毫秒值
			const px_m = 1000*60;	//一分钟的毫秒值
			const px_s = 1000;	//一秒的毫秒值
			let d = Math.floor(last_time/px_d); //剩余时间为多少天
			let h = Math.floor((last_time-d*px_d)/px_h); //剩余时间为多少小时
			let m = Math.floor((last_time-d*px_d - h*px_h)/px_m); //剩余时间为多少分钟
			let s = Math.floor((last_time-d*px_d - h*px_h - m*px_m)/px_s); //剩余时间为多少秒
			let r = [];
			if(d>0){
				r.push(`<em>${d}</em>天`);
			}
			if(r.length || (h>0)){
				r.push(`<em>${h}</em>小时`);
			}
			if(r.length || (m>0)){
				r.push(`<em>${m}</em>分钟`);
			}
			if(r.length || (s>0)){
				r.push(`<em>${s}</em>秒`);
			}
			self.last_time = r.join('');
			update.call(self, r.join(''));
			setTimeout(function(){
				self.countdown(end, update, handle);
			}, 1000);

		}
	}
}