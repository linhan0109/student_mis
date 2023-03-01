<template>
    <div class="container">
      <div class="text3">
        <el-descriptions >
            <el-descriptions-item label="总体绩点"><div>{{GPA}}</div></el-descriptions-item>
        </el-descriptions>
      </div>
        <div class="text1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">

            <el-form-item label="学年">
                <el-select v-model="formInline.region" placeholder="学年">
                <el-option label="总体" value="all"></el-option>
                <el-option label="2021" value="2021"></el-option>
                <el-option label="2020" value="2020"></el-option>
                <el-option label="2019" value="2019"></el-option>
                </el-select>
            </el-form-item>
            
            <!-- <el-form-item label="上课教师">
                <el-input v-model="formInline.user" placeholder="上课教师"></el-input>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="margin-right:200px">查询</el-button>
            </el-form-item>
            <el-form-item label="绩点">
                <el-input v-model="formInline.point" placeholder="绩点"></el-input>
            </el-form-item>
            </el-form>
        </div>
        <div class="text2">
            <img src="../../assets/1.png">

        </div>
    </div>
</template>


<script>
  var array = JSON.parse(localStorage.getItem("point")|| '{}');
  export default {
    data() {
      return {
        formInline: {
          point: '',
          region: ''
        },
        GPA:array['total']
      }
    },
    methods: {
      onSubmit() {
        if(this.formInline.region == '2021')
        {
          this.formInline.point = array['2021']
        }else if(this.formInline.region == '2020')
        {
          console.log("123123123")
          this.formInline.point = array['2020']
        }else if(this.formInline.region == '2019')
        {
          this.formInline.point = array['2019']
        }else if(this.formInline.region == 'all')
        {
          this.formInline.point = array['total']
        }
      }
    }
  }


</script>