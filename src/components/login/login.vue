<template>
	<div id="str">
		  
	<div id="box">
		<p class="titioa">黑马头条</p>
		<!-- 表单 -->
		<div class="bdan">
		<el-form :model="ruleForm" :rules="rules" ref="ref">

			<el-row>
				<el-col :span="24">
				<el-form-item  prop="mobile">
                         <el-input v-model="ruleForm.mobile" prefix-icon="el-icon-phone"></el-input>
                           </el-form-item>
                           </el-col>
			</el-row>
			 
         <el-row>
	<el-col :span="24">
	<el-form-item  prop="code">
    <el-input v-model="ruleForm.code" prefix-icon="el-icon-success"></el-input>
  </el-form-item>
  </el-col>
</el-row>
  
			</el-form>
			<el-row>
				<el-checkbox v-model="checked" @change="han">已经阅读隐私条款</el-checkbox>
			</el-row>
			
			  <el-button type="primary" @click="submitForm" :loading="this.ist">登录</el-button>
		</div>
		
		
	</div>
	</div>
</template>

<script>
import {login} from '@/utlis/user.js'
    export default {
	  data(){
		  return{
			//   加载的状态
			ist:false,
			     checked: false,
                      ruleForm:{
			     mobile: '13911111111',  
			     code:'246810'
		      },
		       rules:{
			   mobile: [
            { required: true, message: '请输入手机号', trigger: 'change' },
            {pattern: /^1[3|5|7|8|9]\d{9}$/,message:"请输入正确的手机号",trigger: 'change'}
          ],     

	  code: [
            { required: true, message: '密码', trigger: 'blur' },
           {pattern:/^\d{6}$/,message:'请输入正却的验证码格式'}
          ],     
		       }
		  }
	  },

	

	  methods:{
han(e){
this.checked=e
},

                     // 登录
		  submitForm(){
			  if(this.checked){

this.$refs.ref.validate(value =>{
	if(value){
                       this.ist=true
// 发送的请求
		login(this.ruleForm).then(res =>{

const to=res.data.data.token
   window.localStorage.setItem('token',JSON.stringify(to))
this.ist=false
		})
this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
	this.$router.push({
		name:'home'
	})
	
	}else{
		this.ist=true
		  this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
	
	}
})
		  }
		  },

		  wts(){

		  }
	
	  }
        
    
    }
</script>

<style scoped lang="less">
#str{
	display: flex;
	justify-content: center;
	align-items: center;
	
}
#box{
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -150px;
	margin-top: -175px;
	width: 300px;
	height: 350px;
	background-color: darkgray;
	.titioa{
		text-align: center;
		margin-top: 20px;
		color:#4a86e8;
	}
	.bdan{
		width: 270px;
		margin-left: 15px;
		margin-top: 15px;
	}
	.el-button{
		position: absolute;
		left: 120px;
		bottom: 95px;
	}
}
</style>
