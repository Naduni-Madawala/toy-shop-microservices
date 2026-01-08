FROM fluent/fluentd:v1.16-1

USER root

# Install plugins (same pattern as Robot-Shop)
RUN gem install fluent-plugin-elasticsearch \
 && gem install fluent-plugin-kubernetes_metadata_filter \
 && gem install fluent-plugin-record-reformer

COPY Docker-Compose/fluent.conf /fluentd/etc/fluent.conf

USER fluent
