{
  "targets": [
    {
      "target_name": "node_win_sec_cred",
      "cflags!": ["-fno-exceptions"],
      "cflags_cc!": ["-fno-exceptions"],
      "sources": ["src/win32/win_sec_cred.cc"],
      "include_dirs": ["<!@(node -p \"require('node-addon-api').include\")"],
      "defines": ["NAPI_CPP_EXCEPTIONS"],
      "msvs_settings": {
        "VCCLCompilerTool": {
          "ExceptionHandling": 1,
          "AdditionalOptions": ["/std:c++20"]
        },
        "Link": {
          "AdditionalDependencies": ["windowsapp.lib"]
        }
      }
    }
  ]
}
