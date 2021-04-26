<template>
	<div>
		<div id="box">
		<p class="bti">系统登录</p>
			<!--表单-->
			<div class="bst">
			<el-form :model="ruleForm" :rules="rules" ref="res">
				<el-row>
				<el-col :span="24">
				<el-form-item prop="username">
					<el-input v-model="ruleForm.username" placeholder="账号"></el-input>
				</el-form-item>
				</el-col>
				</el-row>
				
				<el-row>
					<el-col :span="24">
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" placeholder="密码"></el-input>
				</el-form-item>
					</el-col>
				</el-row>
				
				<el-row>
					<el-col :span="16">
						<el-form-item>
							<el-input v-model="ruleForm.name" placeholder="点击图片更换验证码"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				
				<el-checkbox v-model="checked">记住我</el-checkbox>
				
				<el-form-item>
							<el-button type="primary" @click="login">登录</el-button>
					
				</el-form-item>
				
				</el-form>
				
				
			</div>
			
		</div>
	</div>
</template>

<script>
    export default {
        name: "login",
	    data(){
            return{
                checked: false,
                ruleForm: {
                    username:'',
                    password:''
	                
                },
                rules:{
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ]
                }
            }
	    },
    methods: {
       login(){
           this.$refs.res.validate((value) =>{
	           if(value){
                   this.$message({
                       message: '成功',
                       showClose: true,
                       type: 'success',
                       
                   });
                   
	           }else {
                   this.$message({
                       showClose: true,
                       message: '错了哦，这是一条错误消息',
                       type: 'error'
                   });
	           }
	           
           })
       }
            }
       
        
    
    }
</script>

<style scoped lang="less">
	div{
		position: relative;
	}
#box{
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -175px;
	margin-top: 150px;
	width: 350px;
	height: 350px;
	background-color: dimgrey;
	border-radius: 5%;
	/*表单*/
	.bst{
		width: 300px;
		height: 300px;
	
		left: 25px;
		top: 35px;
		.el-button{
			margin-left: 120px;
		}
	}
	.bti{
		color: #fff;
		font-size: 15px;
		text-align: center;
		margin-top: 10px;
	}
}
</style>
