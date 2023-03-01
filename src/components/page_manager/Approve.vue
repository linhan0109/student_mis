<template>
<div class="all">
    <div class="table">
  <el-table
    :data="tableData"
    :header-cell-style="{'text-align':'center'}"
    :cell-style="{'text-align':'center'}"
    style="width: 100%"
    max-height="100%">
 
     <el-table-column
      prop="ocpno"
      label="活动编号"
      width="50">
    </el-table-column>
     <el-table-column
      prop="name"
      label="活动名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="send_id"
      label="申请人"
      width="120">
    </el-table-column>
     <el-table-column
      prop="bname"
      label="占用教学楼"
      width="180">
    </el-table-column>
     <el-table-column
      prop="classroom"
      label="占用教室"
      width="50">
    </el-table-column>
     <el-table-column
      prop="time"
      label="申请时间"
      width="200">
    </el-table-column>
    <el-table-column
      prop="type"
      label="申请类型"
      width="150"></el-table-column> 
     <el-table-column
      prop="status"
      label="审批状态"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button @click="ok(scope.$index, tableData)" type="text" size="small">同意</el-button>
        <el-button @click="reject(scope.$index, tableData)" type="text" size="small">拒绝</el-button>
      </template>
      
      
    </el-table-column>
    
  </el-table>

   
  </div>
</div>
</template>

<script>
   var array = JSON.parse(localStorage.getItem("approve")|| '[]');
console.log(array)
  // console.log(this.tableData)
  export default {
    
    data() {
     
    console.log(array)
     return {
        tableData:array,
      }
    },

    methods: {
      
      // 同意审批
      ok:function(index){
        
        console.log(index)
         $.ajax({
               url:'http://127.0.0.1:5000/agree',
             
                data:JSON.stringify({"ocpno":index+1}),
               type:'post',
               dataType:'json',
               success:function(data){
               alert('正常');
               },
              error:function () {
                alert('异常')
             }
            })
      },
      // 拒绝审批
      reject:function(index){
       console.log(index)
         $.ajax({
               url:'http://127.0.0.1:5000/reject',
             
                data:JSON.stringify({"ocpno":index+1}),
               type:'post',
               dataType:'json',
               success:function(data){
               alert('正常');
               },
              error:function () {
                alert('异常')
             }
            })
      },
      toggleSelection(rows) {
        console.log("111")
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>