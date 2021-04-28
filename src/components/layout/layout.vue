<template>
  <div id="str">
<!-- 左侧 -->
        <el-container>
  <el-aside width="180px">
            <el-menu
      default-active="4"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      >
 
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>

 <el-menu-item index="/content">
        <i class="el-icon-setting"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>

 <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>

 <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>

 <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>

 <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>

 <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>



    </el-menu>

    
    
  </el-aside>

  <el-container>
          <!-- 头部-->
    <el-header>
            <div class="bos">
                     <div class="zuoce">
                    <i class="el-icon-s-fold"></i>
                    <p>传智播客有限公司</p>
            </div>

                   <div class="youce">
                <img :src="its.photo" alt="">
              <el-dropdown>
  <span class="el-dropdown-link">{{its.name}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>设置</el-dropdown-item>
    <el-dropdown-item @click.native="tuichu">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
             </div>

            </div>
           
            
        
    </el-header>
    <el-main>
            <!-- 中间 -->
              <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

        
          
  </div>
</template>

<script>
import{xinxi} from '@/utlis/user.js'
export default {
data(){
        return{
            its:{}
        }
},
created(){
this.han()
},
methods:{
        han(){
          xinxi().then(res =>{
                  this.its=res.data.data.results[0]
          })
        },
        tuichu(){
               this.$confirm('是否退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出'
          });
          window.localStorage.removeItem('token')
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
        }
}
}
</script>

<style lang="less" scoped>
#str{
        width: 100%;
        height: 100%;
}
.el-container{
         width: 100%;
        height: 100%;
.el-aside{
        height: 100%;
        background-color: #D3D3D3;
}
.el-header{
         width: 100%;
        height: 100px;
        background-color:#FFFFFF;
}
.el-main{
        width: 100%;
        height: 100%;
        background-color:#E6E6FA;
}
}

.el-menu{
        height: 100%
}

// 头部
.bos{
        display: flex;
        justify-content: space-between;
        align-items: center;
.zuoce{
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        .el-icon-s-fold{
                font-size: 15px;
        }
        p{
                  font-size: 15px;
        }
}
.youce{
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
       img{
               width: 50px;
               height: 50px;
               border-radius: 50%;
       }
}
}
</style>