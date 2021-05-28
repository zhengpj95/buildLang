# 语言包操作

## 1. buildXlsx.bat

读取 res 下的 sourceLang.ts，将其写入 xlsx 文件中，并生成特殊要求的 json 文件

```json
{
  "realKey": {
    "key": "realKey",
    "value": "valuevaluevalue" 
  }
}
```

## 2. buildLang.bat

读取 res 下的所有以 **lang_** 开头的 json 文件，将其写入 ts 文件中，并以枚举的方式出现，枚举的值就是 **文件名_key**

之所以这么操作，就是能够明确某一枚举是在哪个文件中的，并读取对应文件的 key 所对应的 value。

这个操作在实际的项目工程中是有实际意义的。
