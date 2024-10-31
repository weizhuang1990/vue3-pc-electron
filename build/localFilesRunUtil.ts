const fs = require("fs");

export default () => ({
  name: "localFilesRunUtil",
  closeBundle:  () => {
     console.log("文件输出完毕")
     replaceRegexStr();
  },
});

const replaceRegexStr =  () => {
  const template = ["./dist/index.html"];
  template.forEach((one) => {
    fs.readFile(one, "utf8", (err: Error, data: string) => {
      if (err) {
        console.log("读取打包文件错误", err);
      } else {
        //   移除造成本地访问时报错的<script type="module" />标签
        let res = data.replace(
          /<script type="module" crossorigin.*?<\/script>/,
          ""
        );
        // 移除原来报错的warning
        res = res.replace(/console.warn\(.*?\);/, "");
        // 移除新发现导致报错的标签
        res = res.replace(/<link rel="modulepreload" crossorigin.*?>/gi, "");
        fs.writeFile(one, res, "utf8", (err: Error) => {
          if (err) {
            console.log("替换写入失败", err);
          } else {
            console.log(`${one}文件写入成功`);
          }
        });
      }
    });
  });

};
