# Build React Frontend
FROM node:22-alpine AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN corepack enable && yarn install --network-timeout 1000000
COPY frontend/ ./
ENV CI=false
ENV DISABLE_ESLINT_PLUGIN=true
ENV GENERATE_SOURCEMAP=false
RUN yarn build

# Production Nginx Runtime
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN ln -s . /usr/share/nginx/html/app && ln -s . /usr/share/nginx/html/Portfolio-Website
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]