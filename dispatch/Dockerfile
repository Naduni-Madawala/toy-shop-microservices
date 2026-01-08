FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY go.mod ./
COPY main.go ./

RUN go build -o dispatch

FROM alpine:3.19
WORKDIR /app
COPY --from=builder /app/dispatch .

EXPOSE 8080
CMD ["./dispatch"]

