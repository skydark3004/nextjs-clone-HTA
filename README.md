# tai_lieu_ban_giao

# Deploy

Khi người dùng push code lên Github. Github sẽ dựa vào điều kiện đã được setup ở folder .github/workflow trong source code để có những trigger tương ứng

![Tên file sẽ ứng với tên nhánh của github](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled.png)

Tên file sẽ ứng với tên nhánh của github

Ví dụ: file develop.yml sẽ setup cách deploy dành cho branch develop ở trên github

Nội dung file hiện tại sẽ bao gồm các bước chính sau:

1. Tạo file JSON của firebase vào source code trước khi build image
2. Authen tới Google Cloud cho máy ảo của github
3. Build image
4. Deploy image tới google cloud run với các biến môi trường được thêm ở Github
5. Send message thành công tới skype ( nếu có lỗi thì github sẽ tự gửi mail về email cá nhân)

**Giải thích các bước:**

1. Tạo file JSON của firebase

Theo [version mới nhất của firebase google](https://firebase.google.com/docs/admin/setup#linux-or-macos), để setup SDK thì cần phải tạo 1 file json credentials ở trong source code và thêm biến môi trường `GOOGLE_APPLICATION_CREDENTIALS` là đường dẫn tới file đó. Để bảo mật thì file này sẽ được tạo thông qua máy ảo khi deploy thông qua biến`FIREBASE_JSON`  trong github.

1. Deploy image

Trong đó các biến môi trường khi deploy image sẽ được thêm ở Github:

![Untitled](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled%201.png)

*Note: để phân biệt môi trường **develop** và **staging**, hiện tại đang setup các biến được phân biệt bởi tiền tố (prefix) giữa các biến như: `REPO_NAME_STAGING` và `REPO_NAME_UAT`. Sau này có thể refactor để sử dụng `enviroment của github` rồi lấy theo các biến tương ứng.*

# Source Code Structure

![Untitled](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled%202.png)

1. authenticate: chứa logic authen
2. common: chứa các function hay dùng chỉ cho dự án hiện tại
3. configs: chứa config của source code
4. core: file json, enum, model, interface… chung
5. decorators: decorators của nestjs
6. interceptors: interceptor của nestjs
7. libs: utils của source code
8. module-admin: api của website admin
9. module-cron-job: logic cronjob
10. module-emit: logic emit và handle event các event trong source code
11. module-global: các module hay được sử dụng ở module khác ( như gửi email, firebase…)
12. module-listen-change: logic lắng nghe các sự thay đổi với một số collection trong database
13. module-mobile: api của mobile
14. module-repository: custom lại logic của thư viện tương tác với database (mongoose)
15. pipe: pipe của nestjs
16. schema: định nghĩa schema và middleware của mỗi collection trong database
17. validator: custom validator trong validate body từ request
18. log: log query database khi develop tại localhost

**Một số lưu ý:**

1. Thời gian trong source code đang được sử dụng theo giờ `UTC +7h` ( lấy giờ UTC cộng với 7). FE sẽ không gửi `Date/Time` cho BE. Mọi Date/Time sẽ được BE xử lí dưới dạng giờ UTC +7h. Vì vậy nếu làm global Date/Time thì cần sửa lại logic.
2. Trên môi trường được deploy, nếu có lỗi `internal server` ( lỗi từ code logic sai ở BE) thì sẽ có thông báo gửi về email thông qua env `OWNER_EMAIL` để có thể fix bugs kịp thời trong trường hợp đang chạy trên production mà bị crash app. Logic xử lí sẽ ở `error.interceptor.ts`

![Untitled](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled%203.png)

1. Init data cho database khi thêm một môi trường mới

Cần tạo init data cho collection `roles`trong database. Data này sẽ được export từ các môi trường đang chạy rồi import vào môi trường mới. 

![Untitled](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled%204.png)

# Debug trên môi trường deploy

1. Check log

Khi muốn check log của từng image trên môi trường đã được deploy cho việc debug thì có thể vào [đây](https://console.cloud.google.com/run?project=vfl-system)

![Untitled](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled%205.png)

1. Check env đã deploy

![Untitled](tai_lieu_ban_giao%20d4cf413caf744a4997b69664e5f6da00/Untitled%206.png)