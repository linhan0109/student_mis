<template>

    <div class="container">
        <div class="text1">
            <el-descriptions title="总体学分">
            <el-descriptions-item label="姓名"><div>{{sname}}</div></el-descriptions-item>
            <el-descriptions-item label="学号"><div>{{sno}}</div></el-descriptions-item>
            <el-descriptions-item label="获得学分"><div>{{totalCredit}}</div></el-descriptions-item>
            
            <!-- <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item> -->
            </el-descriptions>
        </div>
        <div class="text2">
            <el-table
            :data="tableData"
            height="100%"
            style="width: 100%">
            <el-table-column
            prop="year"
            label="学期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="cname"
            label="课程名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="cono"
            label="课程号">
            </el-table-column>
            <el-table-column
            prop="credit"
            label="学分">
            </el-table-column>
            
            </el-table>
        </div>
    </div>
    
    
</template>

<script>
  var array = JSON.parse(localStorage.getItem("already")|| '{}');
  export default {
    data() {
      return {
        totalCredit:'',
        sno:'',
        sname:'',
        tableData: []
      }
    },
    methods: {
      
    },
    mounted:function(){
       var mes = JSON.parse(localStorage.getItem("main_stu"))
       this.sno = mes['id'];
       this.sname = mes['name'];
      this.totalCredit = array[0]['totalCredit'];
      console.log(this.totalCredit)
      console.log(array[0]);
      delete array.totalCredit;
      this.tableData = array;
    }
  }
</script>