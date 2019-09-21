<template>
  <div id="content">
    <div class="frame">
      <div class="left">
        <p>
          <img src="../../image/favicon.jpg" class="logo" />
        </p>
        <h3 class="system">智学无忧后台系统</h3>
        <p class="college">做最有态度、责任、良心的IT教育</p>
      </div>
      <div class="right">
        <div>
          <el-input type="text" style="margin-top:10%;" prefix-icon="el-icon-s-custom"></el-input>
          <el-input type="password" prefix-icon="el-icon-unlock"></el-input>
          <template>
            <el-checkbox class="pwds">记住密码</el-checkbox>
          </template>
          <el-button class="login">登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
#content {
  width: 100%;
  height: 100%;
  background: url("../../image/img/background.jpg");
  position: fixed;
  .frame {
    width: 36%;
    height: 47%;
    background-color: #d8ecf5;
    margin: 0 auto;
    position: relative;
    top: 23%;
    box-shadow: 0px 0px 10px 10px #2760b1;
    border-radius: 6px;
    display: flex;
    .left {
      width: 53%;
      height: 100%;
      border-right: 1px solid #4d8981;
    }
    .logo {
      width: 120px;
      height: 120px;
      background-color: white;
      border-radius: 50%;
      margin-left: 24%;
      margin-top: 13%;
      box-shadow: 0px 0px 10px 0px #ccc;
    }
    .system {
      font-size: 20px;
      color: #0e8880;
      font-weight: bold;
      margin-left: 19%;
      line-height: 60px;
    }
    .college {
      font-size: 12px;
      color: #97a4aa;
      font-weight: bold;
      margin-left: 16%;
      margin-top: 10px;
    }
    .right {
      width: 100px;
      height: 100%;
      display: flex;
      input {
        width: 180px;
        height: 32px;
        border: 2px solid #95C19E;
        margin-left: 25px;
        margin-top: 6%;
      }
      .el-input__prefix{
          font-size: 20px;
          color: #51AE56;
          margin-left: 20px;
          line-height: 50px;
        }
      .pwds {
        margin-left: 25px;
        margin-top: 4%;
      }
      .login {
        width: 170px;
        height: 40px;
        background: #69c32e;
        border-radius: 4px;
        margin-left: 25px;
        color: white;
        margin-top: 4%;
      }
    }
  }
}
</style>