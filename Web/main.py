import eel
if __name__ == '__main__':
    eel.browsers.set_path("chrome", "chrome-win/chrome.exe")
    eel.init('sdk')
    eel.start('index.html', mode="chrome", size=(760, 760))
   