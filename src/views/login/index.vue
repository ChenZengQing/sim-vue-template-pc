<template>
  <div class="login-box">
    <div class="login">
      <div class="logo">
        <img src="@/assets/logo_b.png" alt>
      </div>
      <div class="tip">&nbsp;{{message}}</div>
      <el-form :model="login" ref="login" :rules="loginRules">
        <el-form-item prop="userAccount">
          <el-input v-model="login.userAccount" placeholder="输入账号" size="large">
            <template slot="prepend">
              <i class="iconfont icon-iconuser"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="login.password" placeholder="输入密码" size="large">
            <template slot="prepend">
              <i class="iconfont icon-iconmima"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="yzm" v-model="login.code" placeholder="输入验证码" size="large">
            <template slot="append">
              <img :src="codeImg" @click="reLoadCode" alt>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <input type="button" class="submit" @click="submit" value="登 录">
        </el-form-item>
      </el-form>
      <p class="tc">
        <a href="/9tong-hqp-pc/views/home/fPass.html">忘记密码</a>
      </p>
    </div>
    <img class="img" src="@/assets/home_img.png" alt>
    <footer>
      <p>全面覆盖 上海、杭州、绍兴、金华、海宁、温州、义乌、宁波、广州、深圳、湛江、茂名、佛山、东莞、中山、汕头、惠州 等城市</p>
      <p>Copyright © haoqipei.com</p>
      <p>
        <a href="/9tong-hqp-pc/views/scrapped/form.html">报废车辆登记</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      codeImg: "/9tong-hqp-pc/user/validateCode?",
      message: "",
      login: {
        userAccount: "",
        password: "",
        code: ""
      },
      loginRules: {
        userAccount: [
          {
            required: true,
            message: "请输入账号"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码"
          }
        ]
      }
    };
  },
  methods: {
    reLoadCode() {
      this.codeImg = this.codeImg + new Date().getMilliseconds();
    },
    submit() {
      var that = this;
      that.$refs["login"].validate(function(valid) {
        if (valid) {
          that.$http
            .post("/9tong-hqp-pc/user/loginNew", that.login, {
              emulateJSON: true
            })
            .then(function(res) {
              console.log(111);
              if (res.body.code == 0) {
                location = "/9tong-hqp-pc/views/quotes/list.html";
              } else if (res.body.code == 1) {
                that.$alert(res.body.data, "错误");
              } else {
                that.message = res.body.data;
              }
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped src="@/style/Login.scss">
</style>
