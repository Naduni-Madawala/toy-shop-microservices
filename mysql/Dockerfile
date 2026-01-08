FROM mysql:8

COPY scripts/ /docker-entrypoint-initdb.d/
COPY config.sh /config.sh
COPY convert.sh /convert.sh

RUN chmod +x /config.sh /convert.sh

