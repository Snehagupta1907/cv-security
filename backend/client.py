import requests

# Change the following URLs based on your server's address and port
SERVER_URL = 'http://localhost:5000'
VIOLENCE_DETECTION_ENDPOINT = '/feature/violence/test'
WEAPON_DETECTION_ENDPOINT = '/feature/weapon/test'

def test_violence_detection():
    url = SERVER_URL + VIOLENCE_DETECTION_ENDPOINT
    files = {'file': ('test_video.mp4', open('test_video.mp4', 'rb'))}
    response = requests.post(url, files=files)
    result = response.json()
    print("Violence Detection Result:")
    print(result)

def test_weapon_detection():
    url = SERVER_URL + WEAPON_DETECTION_ENDPOINT
    files = {'file': ('test_video.mp4', open('test_video.mp4', 'rb'))}
    response = requests.post(url, files=files)
    result = response.json()
    print("Weapon Detection Result:")
    print(result)

if __name__ == '__main__':
    # Replace 'test_video.mp4' with the path to your test video file
    test_violence_detection()
    test_weapon_detection()
