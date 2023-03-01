<template>
<div class="classroom_mes">
  <!-- 提示 -->
  <div class="word">
  <el-row>
  <el-col :span="3"><div class="grid-content bg-purple"><p>教室使用查询</p></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div> <p style="color:red">排课占用</p></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"><p style="color:blue">考试占用</p></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"><p style="color:#F59F00">其他安排</p></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"><p style="color:green">实验占用</p></div></el-col>
  </el-row>
  </div>

  <!-- 上方选择栏 -->
   <div class="text1" style="margin-top:15px">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item style="width:100px" >
          <el-select v-model="formInline.year" placeholder="学年">
          <el-option label="2021" value="2021"></el-option>
          <el-option label="2020" value="2020"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item style="width:100px">
           <el-select v-model="formInline.week" placeholder="周次">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="5" value="5"></el-option>
          <el-option label="6" value="6"></el-option>
          <el-option label="7" value="7"></el-option>
          <el-option label="8" value="8"></el-option>
          <el-option label="9" value="9"></el-option>
          <el-option label="10" value="10"></el-option>
          <el-option label="11" value="11"></el-option>
          <el-option label="12" value="12"></el-option>
          <el-option label="13" value="13"></el-option>
          <el-option label="14" value="14"></el-option>
          <el-option label="15" value="15"></el-option>
          <el-option label="16" value="16"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item style="width:100px" >
          <el-select v-model="formInline.building" placeholder="教学楼">
          <el-option label="思源楼" value="002"></el-option>
          <el-option label="逸夫楼" value="001"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item  style="width:150px">
                <el-input v-model="formInline.classroom" placeholder="教室"></el-input>
      </el-form-item>
      <el-form-item style="width:100px" >
          <el-select v-model="formInline.day" placeholder="星期几">
          <el-option label="星期1" value="1"></el-option>
          <el-option label="星期2" value="2"></el-option>
          <el-option label="星期3" value="3"></el-option>
          <el-option label="星期4" value="4"></el-option>
          <el-option label="星期5" value="5"></el-option>
          <el-option label="星期6" value="6"></el-option>
          <el-option label="星期7" value="7"></el-option>
          </el-select>
      </el-form-item>
      <el-select v-model="formInline.class" placeholder="第几节课">
          <el-option label="第1节" value="1"></el-option>
          <el-option label="第2节" value="2"></el-option>
          <el-option label="第3节" value="3"></el-option>
          <el-option label="第4节" value="4"></el-option>
          <el-option label="第5节" value="5"></el-option>
          <el-option label="第6节" value="6"></el-option>
          <el-option label="第7节" value="7"></el-option>
          </el-select>
      <el-form-item>
          <el-button type="primary" plain @click="onSubmit">查询</el-button>
      </el-form-item>
      </el-form>
  </div>


<!-- 表 -->
  <div class="course" style="margin-top:15px">
  
  <el-table
    :data="tableData"
     :header-cell-style="{'text-align':'center'}"
    :cell-style="tableCellStyle"
    border 
    >
    <el-table-column
      prop="date"
      label="星期"
      width="70">
      <el-table-column
        prop="room"
        label="教室"
        width="70"></el-table-column>
      </el-table-column>
    <el-table-column
          prop="province"
          label="星期一"
          width="210">
          <el-table-column 
            prop="1"
            label="1"
            width="30"
            >
           </el-table-column> 
          <el-table-column 
            prop="2"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="3"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="4"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="5"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="6"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="7"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>

        <el-table-column
          prop="province"
          label="星期二"
          width="210">
          <el-table-column 
            prop="8"
            label="1"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="9"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="10"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="11"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="12"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="13"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="14"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>

        <el-table-column
          prop="province"
          label="星期三"
          width="210">
          <el-table-column 
            prop="15"
            label="1"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="16"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="17"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="18"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="19"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="20"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="21"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>

        <el-table-column
          prop="province"
          label="星期四"
          width="210">
          <el-table-column 
            prop="22"
            label="1"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="23"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="24"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="25"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="26"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="27"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="28"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>

        <el-table-column
          prop="province"
          label="星期五"
          width="210">
          <el-table-column 
            prop="29"
            label="1"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="30"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="31"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="32"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="33"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="34"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="35"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>

        <el-table-column
          prop="province"
          label="星期六"
          width="210">
          <el-table-column 
            prop="36"
            label="1"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="37"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="38"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="39"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="40"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="41"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="42"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>

        <el-table-column
          prop="province"
          label="星期日"
           width="210">
          <el-table-column 
            prop="43"
            label="1"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="44"
            label="2"
            width="30">
           </el-table-column> 
          <el-table-column 
            prop="45"
            label="3"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="46"
            label="4"
            width="30">
           </el-table-column>
           <el-table-column 
            prop="47"
            label="5"
            width="30">
           </el-table-column>  
          <el-table-column 
            prop="48"
            label="6"
            width="30">
           </el-table-column> 
           <el-table-column 
            prop="49"
            label="7"
            width="30">
           </el-table-column> 
        </el-table-column>
 
  </el-table>
  </div>
  
  </div>
</template>

<script>
  var array= JSON.parse(localStorage.getItem("classroom_mes")|| '[]');
  var result = JSON.parse(localStorage.getItem("classroom_mes1")|| '[]');//data
  var array1 = result;
  var row1;
  var row2;

  export default {
    data() {
      
      return {
        formInline: {
          year: '',
          week:'',
          building: '',
          classroom:'',
          day:'',
          class:''
        },
        
        tableData:array,
        // tableData: course1,
      }
    },
    methods:{
      onSubmit: function(){
        var that = this;
        console.log({"term":this.formInline.year, "week":this.formInline.week, "bno":this.formInline.building})
        $.ajax({
              url:'http://127.0.0.1:5000/room',
              data:JSON.stringify({"term":this.formInline.year, "week":this.formInline.week, "bno":this.formInline.building}),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
                alert('Successfully Queried')
                console.log(data)
                localStorage.setItem("class_mes1", JSON.stringify(data));
                result = JSON.parse(localStorage.getItem("class_mes1") || '[]')
                console.log
                // var result;
                // that.tableData = [{"1":"hahahahahhahaha","2":"jajajajajaja"}];
                var arr1 = [];
                
                for(var i = 0; i < array1.length; i++)
                {
                  var arr = {"room":"","1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":"","10":"","11":"","12":"","13":"","14":"","15":"","16":"","17":"","18":"","19":"","20":"","21":"","22":"","23":"","24":"","25":"","26":"","27":"","28":"","29":"","30":"","31":"","32":"","33":"","34":"","35":"","36":"","37":"","38":"","39":"","40":"","41":"","42":"","43":"","44":"","45":"","46":"","47":"","48":"","49":""}
                  if(that.formInline.classroom != ''){
                    console.log(that.formInline.classroom)
                    if(that.formInline.classroom == result[i]['classroomno'])
                    {
                      array1 = result[i]
                      arr1[i] = arr; 
                      var temp;
                      if(array1[i]['bno'] == '001')
                      {
                        temp = "YF" + array1[i]['classroomno'];
                      }else{
                        console.log(array1)
                        temp = "SY" + array1[i]['classroomno'];
                      }
                      arr1[i]['room'] = temp;
                    }
                    that.tableData = arr1;
                    // that.$options.methods.tableCellStyle();
                        }else{
                          array1 = result
                          arr1[i] = arr; 
                      var temp;
                      if(array1[i]['bno'] == '001')
                      {
                        temp = "YF" + array1[i]['classroomno'];
                      }else{
                        console.log(array1)
                        temp = "SY" + array1[i]['classroomno'];
                      }
                      arr1[i]['room'] = temp;
                    }
                    that.tableData = arr1;
                    console.log("显示")
                    console.log(that.tableData)
                    // that.$options.methods.tableCellStyle();
                        }
                        if(that.formInline.day != '')
                        {
                          row1 = that.formInline.day;
                        }if(that.formInline.class != '')
                        {
                          row2 = that.formInline.class;
                        }

                  that.$options.methods.tableCellStyle()
                  
                  
                  
                
          },
               error:function () {
              alert('异常')
          }
             })
      },
      tableCellStyle({row, column, rowIndex, columnIndex}){
              // console.log("123123");
              // console.log(this.tableData)
              // console.log(array1)
              
              for(var i = 0; i < array1.length;i++)
                {
                  var num = array1[i]['info'];
                  var numArr = num.split('');
                  console.log("整体的显示")
                  console.log(numArr)
                  for(var j = numArr.length - 1; j >= 0; j--)
                  {
                    //没星期
                    if(row1 == null)
                    {
                      //有第几节课
                      if(row2 != null)
                      {
                        if(rowIndex == i)
                        {
                          if(parseInt(columnIndex) % 7 == parseInt(row2))
                          {
                            console.log(columnIndex)
                            console.log(numArr[j])
                            if(numArr[j] == '1')
                            {
                              return 'background: red'
                            }
                            else if(numArr[j] == '2')
                            {
                              return 'background: green';
                            }
                            else if(numArr[j] == '3')
                            {
                              return 'background: blue';
                            }
                            else if(numArr[j] == '4')
                            {
                              return 'background: #F59F00'
                            }
                          }else{
                            if(columnIndex != 0)
                            {
                              return 'background: #adb5bd'
                            }
                                
                          }
                          
                        }
                      }
                      //没星期没课
                      else{
                        if(rowIndex == i)
                        {
                          if(columnIndex == j + 1)
                          {
                            if(numArr[j] == '1')
                            {
                              return 'background: red'
                            }
                            else if(numArr[j] == '2')
                            {
                              return 'background: green';
                            }
                            else if(numArr[j] == '3')
                            {
                              return 'background: blue';
                            }
                            else if(numArr[j] == '4')
                            {
                              return 'background: #F59F00'
                            }
                          }
                          
                          
                        }
                      }
                    }
                    else
                    {
                      //有星期有课
                      if(row2 != null)
                      {
                        if(rowIndex == i)
                        {
                          if(parseInt(columnIndex) <(parseInt(row1) * 7)  && parseInt(columnIndex) > ((parseInt(row1) - 1) * 7) && parseInt(columnIndex) % 7 == parseInt(row2))
                          {
                            if(numArr[j] == '1')
                            {
                              return 'background: red'
                            }
                            else if(numArr[j] == '2')
                            {
                              return 'background: green';
                            }
                            else if(numArr[j] == '3')
                            {
                              return 'background: blue';
                            }
                            else if(numArr[j] == '4')
                            {
                              return 'background: #F59F00'
                            }
                          }else{
                            if(columnIndex != 0)
                            {
                              return 'background: #adb5bd'
                            }
                              
                          }
                          
                        }
                      }
                      else
                      {
                        if(rowIndex == i)
                        {
                          if(parseInt(columnIndex) <(parseInt(row1) * 7)  && parseInt(columnIndex) > ((parseInt(row1) - 1) * 7) )
                          {
                            if(numArr[j] == '1')
                            {
                              return 'background: red'
                            }
                            else if(numArr[j] == '2')
                            {
                              return 'background: green';
                            }
                            else if(numArr[j] == '3')
                            {
                              return 'background: blue';
                            }
                            else if(numArr[j] == '4')
                            {
                              return 'background: #F59F00'
                            }
                          }else{
                            if(columnIndex != 0)
                            {
                              return 'background: #adb5bd'
                            }
                            
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
</script>