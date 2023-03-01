<template>
<div class="all">
   
    <div class="table">
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="550">
    <el-table-column
      prop="year"
      label="学年"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sname"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sno"
      label="学号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="coursename"
      label="课程名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="courseno"
      label="课程号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="成绩"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      
      </template>
    </el-table-column>
  </el-table>
  </div>

 <div class="part2">
    <div class="button" style="margin-left:1100px;margin-top:20px;">
       
            <el-button type="primary" icon="el-icon-plus" circle  @click="dialogFormVisible = true"></el-button>
        <!-- <el-button type="text" @click="dialogFormVisible = true">增加学生成绩</el-button> -->
            <el-dialog title="增加课程" :visible.sync="dialogFormVisible">
        <el-form :model="form">
        
         <el-form-item label="请输入学号" :label-width="formLabelWidth">
           <el-input v-model="form.sno" autocomplete="off"></el-input>
        </el-form-item>
        
         <!-- <el-form-item label="请输入课程名" :label-width="formLabelWidth">
           <el-input v-model="form.coursename" autocomplete="off"></el-input>
        </el-form-item> -->
         <el-form-item label="请输入课程号" :label-width="formLabelWidth">
           <el-input v-model="form.cono" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入课程编号" :label-width="formLabelWidth">
           <el-input v-model="form.cindex" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="请输入成绩" :label-width="formLabelWidth">
           <el-input v-model="form.grade" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入学年" :label-width="formLabelWidth">
           <el-input v-model="form.year" autocomplete="off"></el-input>
        </el-form-item>
        
       </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="add()">确 定</el-button>
    </div>
  </el-dialog>
    
  </div>
</div>

</div>

</template>

<script>
var array = JSON.parse(localStorage.getItem("stu_grade")|| '[]');
  export default {
      data() {
      //  var array = JSON.parse(localStorage.getItem("stu_grade")|| '[]');
       return {
          tableData:array,
          dialogFormVisible: false,
        form: {
          
          sno: '',
          cono: '',
          grade: '',
          year:'',
          cindex:'',
        },
        formLabelWidth: '120px'
         }
      },

    methods: {
      deleteRow:function(index, rows) {
        rows.splice(index, 1);
        console.log(index)
        $.ajax({
               url:'http://127.0.0.1:5000/delete_grade',
              
                data:JSON.stringify({"sno": this.tableData[index].sno, 
                                    "cono":this.tableData[index].courseno,
                                    "year":this.tableData[index].year,
                                    }),
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
      handleClick(row) {
        console.log(row);
      },
       add:function(){
         var that = this
         console.log(this.form.cono)
          $.ajax({
               url:'http://127.0.0.1:5000/add_modify_grade',
             
              data:JSON.stringify({"sno":that.form.sno,"year":this.form.year,
                                    "cono":this.form.cono,"grade":this.form.grade,"cindex":this.form.cindex}),
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
    }
  }
</script>