<template>
    <div class="container">
        <div class="text1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="学年">
                <el-select v-model="formInline.year" placeholder="学年">
                <el-option label="总体" value="all"></el-option>
                <el-option label="2021" value="2021"></el-option>
                <el-option label="2020" value="2020"></el-option>
                <el-option label="2019" value="2019"></el-option>
                
                </el-select>
            </el-form-item>
            <el-form-item label="课程名">
                <el-input v-model="formInline.cname" placeholder="课程名"></el-input>
            </el-form-item>
            <el-form-item label="上课教师">
                <el-input v-model="formInline.tname" placeholder="上课教师"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            </el-form>
        </div>
        <div class="text2">
            <el-table
                :data="tableData"
                border
                style="width: 100%;height:100%"
                >
                <!-- <el-table-column
                prop="index"
                label="序列"
                width="180"
                >
                </el-table-column> -->
                <el-table-column
                prop="year"
                label="学年"
                width="180">
                </el-table-column>
                <el-table-column
                prop="cono"
                label="课程号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="cname"
                label="课程名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="grade"
                label="成绩"
                width="180">
                </el-table-column>
                <el-table-column
                prop="tname"
                label="上课教师">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script>
  // var array = []
  var array = JSON.parse(localStorage.getItem("grade")|| '[]');
  // console.log(array[0]);
  export default {
    data() {
      
      return {
        formInline: {
          cname: '',
          tname:'',
          year: ''
        },
        
        tableData:array,
        // tableData: course1,
      }
    },
    // var array = JSON.parse(localStorage.getItem("test1")|| '[]');
    methods: {
     
      onSubmit:function() {
        
//         $.ajax({
//               url:'http://127.0.0.1:5000/get_cls_grade',
//               data:JSON.stringify({"year":year, "coname":this.formInline.course, "tname":this.formInline.teacher}),
              
//               type:'post',
//               dataType:'json',
//               success:function(data){ //后端返回的json数据（此处data为json对象）
                
                
//                 alert('正常');
//                 for(var i = 0; i < JSON.stringify(data).length; i++)
//                 {
//                   data[i]['index'] = i + 1;
//                 }
//                 that.tableData = data;
//           },
//                error:function () {
//               alert('异常')
//           }
//              })
          //自己进行查询
          var result = [];
          var number = 0;
          for(var i = 0; i < array.length; i++)
          {
            console.log(i)
            console.log(JSON.stringify(array).length)
            console.log(array[i]['year'])
            console.log("1231231")
            if(this.formInline.year == 'all' || this.formInline.year == '')
            {
              if(this.formInline.cname == '')
              {
                if(this.formInline.tname == '')
                {
                  result = array;
                  break;
                }
                else{
                  if(array[i]['tname'] == this.formInline.tname)
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
              else
              {
                //有课程号
                if(this.formInline.tname == '')
                {
                  if(this.formInline.cname == array[i]['cname'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
                else{
                  if(this.formInline.tname == array[i]['tname'] && this.formInline.cname == array[i]['cname'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
            }
            else
            {
              if(this.formInline.cname == '')
              {
                if(this.formInline.tname == '')
                {
                  if(parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
                else{
                  if(array[i]['tname'] == this.formInline.tname && parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
              else
              {
                //有课程号
                if(this.formInline.tname == '')
                {
                  if(this.formInline.cname == array[i]['cname'] && parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
                else{
                  if(this.formInline.tname == array[i]['tname'] && this.formInline.cname == array[i]['cname'] && parseInt(this.formInline.year) == array[i]['year'])
                  {
                    result[number] = array[i];
                    number++;
                    continue;
                  }
                }
              }
            }
          }
          this.tableData = result;
      },
    }
  }


</script>