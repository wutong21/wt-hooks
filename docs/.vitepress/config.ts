import { DefaultTheme, defineConfig } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
  { text: "指南", link: "/guide/" },
  { text: "Hooks列表", link: "/functions/isNull" },
];

const functions = {
  text: "Hooks列表",
  items: [
    { text: "isNull", link: "/functions/isNull" },
    { text: "mulFormValidate", link: "/functions/mulFormValidate" },
    { text: "listenPageMenu", link: "/functions/listenPageMenu" },
    {
      text: "formatterStringbyTime",
      link: "/functions/formatterStringbyTime",
    },
    {
      text: "formatterStringby10Time",
      link: "/functions/formatterStringby10Time",
    },
    {
      text: "transformCountDownTime",
      link: "/functions/transformCountDownTime",
    },
    {
      text: "computeDomNeedHeight",
      link: "/functions/computeDomNeedHeight",
    },
    {
      text: "throttleFirstExt",
      link: "/functions/throttleFirstExt",
    },
    {
      text: "downloadFile",
      link: "/functions/downloadFile",
    },
    {
      text: "encrypt",
      link: "/functions/encrypt",
    },
    {
      text: "getTimeOptions",
      link: "/functions/getTimeOptions",
    },
    {
      text: "arrayObjRemoveDuplicateByAttr",
      link: "/functions/arrayObjRemoveDuplicateByAttr",
    },
    {
      text: "validatePort",
      link: "/functions/validatePort",
    },
    {
      text: "validatePortFormat",
      link: "/functions/validatePortFormat",
    },
    {
      text: "validateMask",
      link: "/functions/validateMask",
    },
    {
      text: "useFormatLongNumber",
      link: "/functions/useFormatLongNumber",
    },
    {
      text: "base64ToUrl",
      link: "/functions/base64ToUrl",
    },
  ],
};

const regExp = {
  text: "正则 RegExp",
  items: [{ text: "正则表达式", link: "/regExp/regExp" }],
};

const sidebar: DefaultTheme.Sidebar = {
  // "/guide": [
  //   {
  //     text: "指南",
  //     items: [
  //       { text: "组件库介绍", link: "/guide/" },
  //       { text: "快速开始", link: "/guide/quickstart" },
  //     ],
  //   },
  // ],
  "/functions": [regExp, functions],
  "/regExp": [regExp, functions],
};

export default defineConfig({
  title: "Wt Hooks",
  lang: "cn-ZH",
  base: "/",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Wt Hooks",
    nav,
    sidebar,
  },
});
