# viết dockerfile chạy nodejs hiển thị Hello, Docker! port 3000, dùng baseimage node:18
FROM node:18
WORKDIR /app
COPY app.js .
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]