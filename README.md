
# News Frontend

Bu proje, kullanıcıların ilgi alanlarına göre özelleştirilmiş haber akışını görüntüleyebileceği React tabanlı bir haber uygulamasıdır. Kullanıcılar kategorilere göre filtreleme yapabilir ve ilgili haberler dinamik olarak yüklenir.

## Teknolojiler

- React
- Axios
- Modern CSS
- Çevresel değişkenler (.env desteği)

## Özellikler

- Kategorilere göre haber filtreleme
- API üzerinden dinamik haber yükleme
- Kolayca yapılandırılabilir API URL’si

## Kurulum ve Çalıştırma

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/muhsinlight/news-frontend.git
   cd news-frontend
   ```

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Proje dizininde bir `.env` dosyası oluşturun ve içerisine kendi backend URL’inizi belirtin:

   ```env
   REACT_APP_API_BASE_URL=https://api.ornekdomain.com/api
   ```

4. Uygulamayı başlatın:

   ```bash
   npm start
   ```
