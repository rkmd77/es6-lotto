import yargs from 'yargs';

const args = yargs

	.option('production',{	//区分开发环境或线上环境
		boolean:true,
		default: false,
		describe: 'min all scripts'
	})

	.option('watch',{		//是否需要监听文件更改
		boolean:true,
		default: false,
		describe: 'watch all files'
	})

	.option('verbose',{		//是否需要详细输出命令行日志
		boolean:true,
		default: false,
		describe: 'log'
	})

	.option('sourcemaps',{		//处理js压缩后的scourcemap
		describe: 'force the creation'
	})

	.option('port',{		//设置服务器端口
		string: true,
		default: 7070,
		describe: 'server port'
	})

	.argv		//输出命令行以字符串来解析