<template>

<!-- <div class="user-avator"><img src="../../assets/user.jpg" /></div> -->
<div class="main">    
  <div class="user_pic" >
    <img src="../../assets/user.jpg" width="20%">
    </div>       
<el-descriptions title="个人信息" direction="vertical" :column="6" border>
  <!-- :span="2" -->
  
<el-descriptions-item label="学号" >
    <div>{{sno}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="姓名" >
    <div>{{sname}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="性别" >
    <div>{{sex}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="年龄" >
    <div>{{age}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="生日" >
    <div>{{birthday}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="总学分" >
    <div>{{totalCredit}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="绩点" >
    <div>{{GPA}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="班级" >
    <div>{{classno}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="宿舍楼" >
    <div>{{bno}}</div>
  </el-descriptions-item>
  <el-descriptions-item label="家庭住址" >
    <div>{{address}}</div>
  </el-descriptions-item>
  
</el-descriptions>
</div>  

</template>

<script>
export default{
  data(){
    var array = JSON.parse(localStorage.getItem("main_stu")|| '{}');
    // alert(array['sno']);
    // console.log(array['sno']);
    return{
      sno:array['id'],
      sname:array['name'],
      sex:array['sex'],
      age:array['age'],
      birthday:array['birthday'],
      totalCredit:array['totalcredit'],
      GPA:array['GPA'],
      classno:array['classno'],
      bno:array['building'],
      address:array['address']
    }
  },
  
}
</script>