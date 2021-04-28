<template>
<div>
 <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>内容</el-breadcrumb-item>
</el-breadcrumb>


<el-row>
<el-form ref="form" :model="form" label-width="80px">
        <!-- 状态 -->
        <el-form-item label="状态:">
    <el-radio-group v-model="form.condition">
      <el-radio :label="0">草稿</el-radio>
      <el-radio :label="1">待审核</el-radio>
       <el-radio :label="2">审核通过</el-radio>
      <el-radio :label="3">审核失败</el-radio>
       <el-radio :label="4">已删除</el-radio>
      <el-radio :label="null">全部</el-radio>
    </el-radio-group>
  </el-form-item>

  <!-- 活动区域 -->
    <el-form-item label="活动区域">
    <el-select v-model="form.select" placeholder="请选择频道">
<span v-for="item in channel" :key="item.id">
    <el-option :label="item.name" :value="item.id"></el-option>
</span>
    
   
    </el-select>
  </el-form-item>

  <!-- 活动时间 -->
   <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

 <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</el-row>

<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>查询到{{total_count}}条数据</el-breadcrumb-item>
</el-breadcrumb>

<!-- tab表格 -->
 <el-table
    :data="list"
    stripe
    style="width: 100%">
    
    <el-table-column
      label="封面"
      width="180">
        <template slot-scope="scope">
            <img :src="scope.row.cover.images[0]" alt="">
            </template>
    </el-table-column>
    
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>

    <el-table-column
      label="状态">
      <template slot-scope="scope">
            <el-tag v-if="scope.row.status==0">草稿</el-tag>
<el-tag type="success" v-if="scope.row.status==1">待审核</el-tag>
<el-tag type="info" v-if="scope.row.status==2">审核通过</el-tag>
<el-tag type="warning" v-if="scope.row.status==3">审核失败</el-tag>
<el-tag type="warning" v-if="scope.row.status==4">已删除</el-tag>
         </template>
    </el-table-column>
    <el-table-column


      prop="pubdate"
      label="发布时间">
    </el-table-column>


    <el-table-column
      label="操作">
      <template slot-scope>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
       <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
    </el-table-column>
  </el-table>


         <el-pagination
  background
  layout="prev, pager, next"
  :total="total_count"
  :page-size="respectively"
  @current-change="handleCurrentChange"
         >
</el-pagination>

</div>

</template>

<script>
import {getarticles,article} from '../../utlis/artic.js'
export default {
data(){
        return{

                form: {
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
                    // 状态
                    condition:null,
                    // 频道的id
                    select:null,
        },
            
            // 文章的总数
            total_count:0,
         // 页码
            pagination:1,
            respectively:15,
            
            
           

        // 表格的数据
        list:[],
            
            // 频道数据
            channel:[]
        }
},
created(){
this.ask(),
    this.essay()
},
methods:{
         onSubmit() {
        this.ask()
      },

    
    handleCurrentChange(e){
    this.pagination=e
        this.ask()
    },
    
      ask(){
             getarticles({
                 page:this.pagination,
                 per_page:this.respectively,
                 status:this.form.condition,
                 channel_id:this.form.select
             }).then(res =>{
                     console.log(res.data.data)
                     this.list=res.data.data.results
               this.total_count=res.data.data.total_count
              
             })
      },
    
    // 文章的频道
    essay(){
        article({}).then(res =>{
            console.log(res)
            this.channel=res.data.data.channels
        })
    }
    
}
}
</script>

<style lang="less" scoped>
.el-breadcrumb{
        margin-bottom: 15px;
}
</style>
