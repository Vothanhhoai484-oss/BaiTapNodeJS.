const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Thông tin sinh viên</title>
      <style>
        body {
          background: #e3f2fd;
          font-family: Arial;
          text-align: center;
          padding: 50px;
        }
        h1 { color: #1565c0; }
        .info {
          background: white;
          padding: 30px;
          border-radius: 15px;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="info">
        <h1>THÔNG TIN SINH VIÊN</h1>
        <h2>Họ và tên: Võ Thanh Hoài</h2>
        <h3>Trường: Kỹ thuật Công nghệ Nha Trang</h3>
        <h3>Lớp: CĐ-CNTT18A</h3>
        <h3>Mã sinh viên: CĐ-CNTT18A14</h3>
        <p>
                        Đề tài: HTTP Server bằng Node.js </p>
      </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
