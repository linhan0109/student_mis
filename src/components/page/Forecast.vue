<template>
  <div>
    <el-row style="text-align: center">
    <el-col>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic"  inline="false">
    <el-col>
    <el-form-item label="学年" style="display: inline-block;">
        <el-select v-model="dynamicValidateForm.region" placeholder="请选择要查看的学期">
            <el-option label="总体" value="beijing"></el-option>
            <el-option label="2020-2021" value="2020"></el-option>
            <el-option label="2019-2020" value="2019"></el-option>
            <el-option label="2018-2019" value="2018"></el-option>
        </el-select>
    </el-form-item>
    </el-col>
    <el-col>
      <el-row :gutter="24" v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key">
        <el-col :span="24">
          <el-form-item 
          :label="'课程号' + index"
          :prop="'domains.' + index + '.value'"
          :rules="{
          
          }"
          style="display: inline-block"
          inline="false">
          <el-input v-model="domain.cono"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="成绩" prop="grade" style="margin-top: 15px; ">
            <el-input v-model="domain.grade" palceholder="请输入成绩">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="学分" prop="credit" style="margin-top: 15px;">
            <el-input v-model="domain.credit" palceholder="请输入学分">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-button @click.prevent="removeDomain(domain)" style="margin-top: 15px;margin-bottom: 15px">删除</el-button>
        </el-col>
      </el-row>
    </el-col>
      <!-- <el-row :gutter="24" v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key">
        <el-col :span="24">
          <el-form-item 
          :label="'课程号' + index"
          :prop="'domains.' + index + '.value'"
          :rules="{
          required: true, message: '课程名不能为空', trigger: 'blur'
          }"
          style="display: inline-block"
          inline="false">
          <el-input v-model="domain.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="成绩" prop="grade" style="margin-top: 15px; ">
            <el-input v-model="domain.grade" palceholder="请输入成绩">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col:span="24">
          <el-form-item label="学分" prop="credit" style="margin-top: 15px;">
            <el-input v-model="domain.credit" palceholder="请输入学分">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-button @click.prevent="removeDomain(domain)" style="margin-top: 15px;">删除</el-button>
        </el-col>
      </el-row> -->

    <!-- </el-col> -->
      <el-col>
        <el-form-item style="display: inline-block">
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addDomain">新增课程</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-col>
      <el-col>
        <el-form-item label="预估绩点" prop="forecast" style="display: inline-block">
            <el-input v-model="dynamicValidateForm.forecast" palceholder="获取到的绩点">
            </el-input>
          </el-form-item>
      </el-col>
    </el-form>
    </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    
    data() {
      return {
        dynamicValidateForm: {
          
          region: '',
          domains: [{
            cono: '',
            grade: '',
            credit: ''
          }],
          forecast:'',
        },
        
      };
    },
    
    methods: {
      
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var that = this;
            var mes = JSON.parse(localStorage.getItem("main_stu"))
            var stu = mes['id'];
            // var shuzu2 = JSON.parse(localStorage.getItem("test"));
            // console.log(shuzu2[0]['credit']);
           
            // alert(this.dynamicValidateForm.domains.length);
            
            var shuzu = [];
            for(var i = 0; i < this.dynamicValidateForm.domains.length; i++)
            {
              shuzu[i] = {"sno":stu, "grade":this.dynamicValidateForm.domains[i].grade, "credit":this.dynamicValidateForm.domains[i].credit};
            }
            // alert('submit!');
            $.ajax({
              url:'http://127.0.0.1:5000/gpa',

              data:JSON.stringify(shuzu),
              
              type:'post',
              dataType:'json',
              success:function(data){ //后端返回的json数据（此处data为json对象）
               that.dynamicValidateForm.forecast = data['changed_gpa'];
                console.log(that.dynamicValidateForm.forecast)
          },
               error:function () {
              alert('异常')
          }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          grade: '',
          credit: '',
          key: Date.now()
        });
      }
    }
  }
</script>