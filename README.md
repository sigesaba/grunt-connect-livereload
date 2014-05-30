grunt-connect-livereload
=======

概要
-----
Gruntがindex.htmlと*.cssファイルと*.jsファイルを監視します。これらのファイルが更新されればGoogle Chromeを自動的に再読込します。

###使用するGruntプラグイン
* [grunt-contrib-connect](https://www.npmjs.org/package/grunt-contrib-connect)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)


使用方法
-----
##cloneまたはダウンロード
ファイルをcloneまたはダウンロードして適当なディレクトリに配置してください。

##各プラグインダウンロード
プロジェクトにはプラグインが含まれていませんのでnpmコマンドでダウンロードしてください。

```
npm install
```

##livereloadをインストール
grunt-contrib-watchでlivereloadを行うので、ブラウザにlivereload拡張をインストールします。勉強会ではChromeとChome版livereload拡張を使いました。

livereload拡張はこちらからダウンロードできます。[How do I install and use the browser extensions?](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)


##gruntを実行

Gruntfile.jsがあるディレクトリでgruntを実行します。

```
grunt
```

##ブラウザでhtmlを表示するには
http://localhost:9001 でindex.htmlを表示できます。

