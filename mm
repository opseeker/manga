package com.saikia.manga;

import android.app.Activity;
//import android.graphics.Bitmap;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

//import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends Activity {
    private WebView MangaView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        MangaView=(WebView) findViewById(R.id.MangaView);
        MangaView.setWebViewClient(new WebViewClient());
//        MangaView.loadUrl("file:///android_asset/index.html");
        MangaView.loadUrl("https://opseeker.github.io/manga/");
//        MangaView.setInitialScale(1);
        WebSettings webSettings=MangaView.getSettings();
        webSettings.setJavaScriptEnabled(true);
    }

    @Override
    public void onBackPressed() {
        if (MangaView.canGoBack()) {
            MangaView.goBack();
            return;
        }
        else {
            finish();
        }

        super.onBackPressed();
    }
}
