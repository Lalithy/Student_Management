FROM node:alpine as builder
WORKDIR /student-managment
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /student-managment/dist/student-managment /usr/share/nginx/html