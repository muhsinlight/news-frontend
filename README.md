News Frontend
Bu proje, kullanıcıların ilgi alanlarına göre özelleştirilmiş haber akışını görüntüleyebileceği bir React tabanlı haber uygulamasıdır. Kategorilere göre filtreleme yapılabilir ve ilgili haberler dinamik olarak yüklenir.

Bu projede React, Axios ve modern CSS kullanılmıştır. API ile haberler çevresel değişken üzerinden yapılandırılabilir bir şekilde alınır (.env desteği vardır).

Projeyi çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

Depoyu klonlayın:

git clone https://github.com/muhsinlight/news-frontend.git

cd news-frontend

Gerekli bağımlılıkları yükleyin:

npm install


Proje dizininde bir .env dosyası oluşturun ve içerisine kendi backend URL’inizi belirtin: 

REACT_APP_API_BASE_URL=https://api.ornekdomain.com/api

Uygulamayı başlatın:


npm start
