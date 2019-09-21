<template>
  <div id="home">
    <el-container style="height: 100%;">
      <el-aside width="210px">
        <el-menu router default-active="2" background-color="#545c64" :collapse="isCollapse">
          <el-menu class="top" style="background: #ffeb3a;">
            <template>
              <img src="../../image/favicon.jpg" class="logo" />
              <span>智学无忧教育</span>
            </template>
          </el-menu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>在线测试
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item,ind) in test"
                @click="tab(item,ind)"
                :key="ind"
                :index="item.path"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>基础数据
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(item,ind) in base"
                @click="tab(item,ind+test.length)"
                :key="ind"
                :index="item.path"
              >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="padding-left:0px;">
          <el-tabs
            v-model="editableTabsValue2"
            type="card"
            closable
            @tab-remove="removeTab"
            class="tab"
          >
            <el-tab-pane
              v-for="(item, index) in editableTabs2"
              :key="index"
              :label="item.title"
              :name="item.name"
            >{{item.content}}</el-tab-pane>
          </el-tabs>
          <div style="display:flex;margin-left:100px;">
            <i class="el-icon-setting"></i>
            <span class="quit">退出</span>
            <i class="el-icon-s-custom"></i>
          </div>
        </el-header>
        <el-main>
          <router-view name="show"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      editableTabsValue2: "0",
      editableTabs2: [
        {
          title: "首页",
          name: "0"
        }
      ],
      base: [
        { path: "/ClassManage", name: "班级管理" },
        { path: "/ModifyPassword", name: "学生管理" },
        { path: "/StudentManage", name: "老师管理" },
        { path: "/TeacherManage", name: "修改密码" }
      ],
      test: [
        { path: "/MakeTestPaper", name: "老师出卷" },
        { path: "/TestPaperManage", name: "试卷管理" },
        { path: "/TestResult", name: "安排测试" },
        { path: "/TestSetter", name: "批阅试卷" },
        { path: "/ViewTestPaper", name: "测试成绩" }
      ],
      tabIndex: 2
    };
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs2.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content"
      });
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },
    tab(ine, e) {
      var i = e + 1 + "";
      console.log(ine.name);
      for (var a in this.editableTabs2) {
        if (this.editableTabs2[a].title == ine.name) {
          this.editableTabsValue2 = i;
          return;
        }
      }
      this.editableTabs2.push({
        title: ine.name,
        name: i
      });
      this.editableTabsValue2 = i;
    }
  }
};
</script>

<style lang="less">
#home {
  height: 100%;
  .el-aside {
    background: #545c64;
  }
  .top {
    height: 59px;
    line-height: 59px;
    display: flex;
    span {
      color: #008181;
      font-size: 18px;
      font-weight: bold;
      margin-left: 7px;
    }
    .logo {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      margin-top: 13px;
      border-radius: 30px;
      box-shadow: 0px 0px 10px 2px #7ab162;
      border: 1px solid #7ab162;
    }
  }
  .el-header {
    border-bottom: 1px solid #ccc;
    display: flex;
  }
  .el-icon-s-custom {
    font-size: 35px;
    color: #fff;
    background: #c2c6ce;
    border-radius: 30px;
    margin-left: 10px;
    margin-top: 13px;
    width: 35px;
    height: 35px;
  }
  .tab {
    display: inline-block;
    margin-top: 18px;
    margin-left: 20px;
    width: 90%;
    overflow: hidden;
  }
  .quit {
    font-size: 15px;
    margin-top: 22px;
    width: 30px;
  }
  .el-icon-setting {
    margin-right: 7px;
    margin-top: 23px;
  }
}
</style>