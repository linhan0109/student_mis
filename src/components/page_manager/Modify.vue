<template>
<div class="all">
  <div class="part1">
  <el-table
    :data="tableData"
    :header-cell-style="{'text-align':'center'}"
    :cell-style="{'text-align':'center'}"
    style="width: 100%"
    max-height="100%">
    <el-table-column
      prop="tname"
      label="教师名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="t_year"
      label="年份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="time"
      label="上课时间"
      width="120">
    </el-table-column>
     <el-table-column
      prop="t_language"
      label="授课语言"
      width="120">
    </el-table-column>
    <el-table-column
      prop="courseno"
      label="课程号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="courseName"
      label="课程名称"
      width="220">
    </el-table-column>
   <el-table-column
      prop="cindex"
      label="课序号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="place"
      label="上课地点"
      width="120">
    </el-table-column> 
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
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
       
            <!-- <el-button type="primary" icon="el-icon-plus" circle  @click="add = true"></el-button> -->
            <el-button type="text" @click="dialogFormVisible = true">增加课程</el-button>
            <el-dialog title="增加课程" :visible.sync="dialogFormVisible">
        <el-form :model="form">
        <el-form-item label="请输入教师号" :label-width="formLabelWidth">
           <el-input v-model="form.tno" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="请输入上课时间" :label-width="formLabelWidth">
           <el-input v-model="form.time" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="请输入年份" :label-width="formLabelWidth">
           <el-input v-model="form.year" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="请输入授课语言" :label-width="formLabelWidth">
           <el-input v-model="form.lan" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="请输入上课地点" :label-width="formLabelWidth">
           <el-input v-model="form.place" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item label="请输入课程编号" :label-width="formLabelWidth">
           <el-input v-model="form.cono" autocomplete="off"></el-input>
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
  var array = JSON.parse(localStorage.getItem("manager_modify")|| '[]');
  export default {
    data() {
     
       return {
          tableData:array,
          dialogFormVisible: false,
        form: {
          cono: '',
          place: '',
          lan: '',
          year: '',
          time: '',
          tno: ''
        },
        formLabelWidth: '120px'
         }
    },

    methods: {
      deleteRow:function(index, rows) {
        rows.splice(index, 1);
        console.log(index)
        $.ajax({
               url:'http://127.0.0.1:5000/delCourse',
             
                data:JSON.stringify({"year": this.tableData[index].t_year, 
                                    "cindex":this.tableData[index].cindex,
                                    "courseno":this.tableData[index].courseno}),
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
      
      $.ajax({
               url:'http://127.0.0.1:5000/addCourse',
             
              data:JSON.stringify({"cono":this.form.cono,
                                    "place":this.form.place,"lan":this.form.lan,
                                    "year":this.form.year,"time":this.form.time,
                                    "tno":this.form.tno}),
               type:'post',
               dataType:'json',
               success:function(data){
               alert('正常');
               },
              error:function () {
                alert('异常')
             }
            })
     
    }

    }
   
 
      }
    
  
</script>