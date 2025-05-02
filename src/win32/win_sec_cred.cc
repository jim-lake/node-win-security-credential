#include <napi.h>
#include <winrt/Windows.Security.Credentials.h>

using namespace winrt;
using namespace Windows::Security::Credentials;

Napi::Value GetPassword(const Napi::CallbackInfo &info) {
  Napi::Env env = info.Env();

  if (info.Length() < 2 || !info[0].IsString() || !info[1].IsString()) {
    Napi::TypeError::New(env, "Expected two string arguments")
        .ThrowAsJavaScriptException();
    return env.Null();
  }

  std::string resource = info[0].As<Napi::String>();
  std::string username = info[1].As<Napi::String>();

  try {
    PasswordVault vault;
    PasswordCredential cred = vault.Retrieve(winrt::to_hstring(resource),
                                             winrt::to_hstring(username));
    cred.RetrievePassword();
    std::string password winrt::to_string(cred.Password());
    return Napi::String::New(env, password);
  } catch (const winrt::hresult_error &e) {
    Napi::Error::New(env,
                     "Failed to retrieve password: " + std::to_string(e.code()))
        .ThrowAsJavaScriptException();
    return env.Null();
  }
}
Napi::Value SetPassword(const Napi::CallbackInfo &info) {
  Napi::Env env = info.Env();
  if (info.Length() < 3 || !info[0].IsString() || !info[1].IsString() ||
      !info[2].IsString()) {
    Napi::TypeError::New(env, "Expected two string arguments")
        .ThrowAsJavaScriptException();
    return env.Null();
  }
  std::string resource = info[0].As<Napi::String>();
  std::string username = info[1].As<Napi::String>();
  std::string password = info[2].As<Napi::String>();

  try {
    PasswordVault vault;
    PasswordCredential cred =
        vault.Add(winrt::to_hstring(resource), winrt::to_hstring(username),
                  winrt::to_hstring(password));
  } catch (const winrt::hresult_error &e) {
    Napi::Error::New(env,
                     "Failed to retrieve password: " + std::to_string(e.code()))
        .ThrowAsJavaScriptException();
  }
  return env.Null();
}
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  // Initialize COM apartment for WinRT
  init_apartment();
  exports.Set("getPassword", Napi::Function::New(env, GetPassword));
  exports.Set("setPassword", Napi::Function::New(env, SetPassword));
  return exports;
}
NODE_API_MODULE(addon, Init)
