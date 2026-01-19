# OtoRecMe

システム音声（スピーカー出力）を録音する Web アプリケーション。

**OtoRecMe** = Oto(音) + Record + Me「音を取り込み」の意味を込めた名前です。

🌐 **デモ**: [https://procella0903.github.io/OtoRecMe/](https://procella0903.github.io/OtoRecMe/)

## 機能

- 🎙️ システム音声のキャプチャ（ループバック録音）
- ⏱️ 録音時間のリアルタイム表示
- 💾 WebM 形式（Opus codec）でローカル保存
- 🚪 共有対象（タブ/ウィンドウ）終了時の自動停止
- ⚠️ 録音中のタブ閉じ防止アラート
- 📱 PWA対応（デスクトップアプリとしてインストール可能）
- 🔒 完全プライバシー保護（データは端末内のみ）

## 使い方

1. 「録音開始」をクリック
2. 画面共有ダイアログで録音対象を選択
   - **重要**: 「システム音声を共有」にチェックを入れる
3. 録音終了時は「停止」をクリック、または共有対象を閉じる
4. 保存ダイアログで任意の場所に保存

## 対応環境

- **ブラウザ**: Chrome、Edge、その他Chromium系ブラウザ
- **OS**: Windows、macOS、Linux
- ※ Safari、Firefoxは非対応
- ※ スマートフォン・タブレットは非対応

## 技術スタック

- HTML / CSS / JavaScript（フレームワーク不使用）
- Web Audio API / MediaRecorder API
- File System Access API
- PWA (Progressive Web App)
- Service Worker

## ファイル構成

```
OtoRecMe/
├── index.html          # メインアプリケーション
├── manifest.json       # PWAマニフェスト
├── service-worker.js   # Service Worker
├── sitemap.xml         # SEO用サイトマップ
├── robots.txt          # クローラー向け指示
├── icons/
│   ├── icon-192.png    # PWAアイコン (192x192)
│   └── icon-512.png    # PWAアイコン (512x512)
├── LICENSE
└── README.md
```

## ライセンス

MIT License
