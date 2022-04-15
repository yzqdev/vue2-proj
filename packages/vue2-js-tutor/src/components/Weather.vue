<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-col :span="24" class="toolbar">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="请输入城市名称" v-model="input2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-on:click="greet">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24" v-if="show">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ city }}</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >复制</el-button
          >
        </div>
        <strong>城市:{{ city }}</strong
        >&nbsp;&nbsp;&nbsp;<strong>温度:{{ temperature }}</strong>
        <div class="text item" v-for="item in yesterday">
          <strong>{{ item }}</strong>
        </div>
      </el-card>
    </el-col>
    <el-col :span="24" v-if="show">
      <el-table
        :data="gridData"
        stripe
        fit
        style="width: 80%; text-align: center"
      >
        <el-table-column align="center" prop="date" label="日期">
        </el-table-column>

        <el-table-column align="center" prop="type" label="天气">
        </el-table-column>
        <el-table-column align="center" prop="high" label="日间温度">
        </el-table-column>
        <el-table-column align="center" prop="low" label="夜间温度">
        </el-table-column>
        <el-table-column align="center" prop="pressure" label="气压值">
        </el-table-column>
      </el-table>
    </el-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "weather",
  data() {
    return {
      msg: "输入地址查询天气",
      input2: null,
      show: false,
      gridData: [],
      city: null,
      temperature: null,
      yesterday: null,
    };
  },
  methods: {
    greet() {
      axios
        .get(`https://www.apiopen.top/weatherApi?city=${this.input2}`)
        .then((response) => {
          this.city = response.data.data.city;
          this.temperature = response.data.data.wendu;
          let foresee = response.data.data.forecast;
          this.yesterday = response.data.data.yesterday;
          for (let i = 0; i < foresee.length; i++) {
            this.gridData.push({
              date: foresee[i].date,

              type: foresee[i].type,
              high: foresee[i].high,
              low: foresee[i].low,
            });
          }

          this.show = true;
        })
        .catch(function (response) {
          console.log(response);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.el-table {
  margin: 5% 10%;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  /*width: 500px;*/
  margin: auto 400px;
  text-align: center;
}
</style>
