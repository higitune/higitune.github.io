---
title: vuepress設定
date: '2019/05/24 20:24:17'
type: post
tag: Vuepress
meta:
  -
    name: description
    content: このブログをvuepressで作ってgithub pagesに上げるまでの手順
  -
    name: keywords
    content: vuepress
---

このブログをvuepressで作ってgithub pagesに上げるまでの手順をまとめる

<!-- more -->

## What is vuepress

vuepressとは静的ページを生成してくれるvueベースのフレームワーク

Nuxt.jsも同じ目的に使えるけど違いはvuepressのほうが機能を絞っていてシンプル。シンプルさはかなりすごくて、インストールしたらやることはmarkdownを書いてビルドするだけ。あとはそれに対応した静的ページが生成されてルーティングやら何やらはよしなにやってくれる。

[公式ページ](https://vuepress.vuejs.org/)

## vuepress for blog

基本的にはドキュメントに全部書いてある(はず)
非常にドキュメントも充実していて(そもそもシンプルなのでできることも限られていて)わかりやすい。その中で一点大きな注意点があって、Documentを生成することがvuepressのベースとなる機能なので、

> default theme optimized for writing technical documentation

ブログ機能は1.0以降でしか対応していない (2019-05-25時点: 最新版v0.14.11 alpha最新版v1.0.0-alpha.48). そのため、このブログは現在alpha版を入れることで対応している.

blog機能が何を提供してくれているのかというと、これもシンプルで [plugin-blog](https://v1.vuepress.vuejs.org/plugin/official/plugin-blog.html#install) に書かれたシンプルな機能を提供してくれているだけ。実際の表示部分とかは自分で設定し(誰かが作ったテーマを使って)てねというスタンス。そこで今回僕は[awsome-vuepress](https://github.com/ulivz/awesome-vuepress)から[vuepress-theme-yubisaki](https://github.com/Yubisaki/vuepress-theme-yubisaki)をとりあえず使ってみることにした。yubisakiという名前だけどメンテナの人は中国人っぽい.いずれにせよ最低限の機能、デザイン、ドキュメントは問題なさそうだったのでとりあえず使ってみている。
導入に至ってはドキュメントに書いてある通りシンプルで

```
yarn add vuepress-theme-yubisaki@next -S
```

以上。

これで最低限の体裁が整ったブログが出来上がり。ローカルで立ち上げるときは

```
yarn run vuepress dev
```

ビルドのときは

```
yarn run vuepress build
```

若干コンフィグをカスタマイズしているのと、github pagesにdeployする手順は次のポストで。

## リンク集
 - https://vuepressbook.com/markdown.html
