#
# This Dockerfile will build a container from the GitHub Actions artifacts
#

FROM node:16-bullseye

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --gid 1001 --system nodejs
RUN adduser --system nodejs --gid 1001 --uid 1001

WORKDIR /app
COPY --chown=nodejs:nodejs app/public ./public
COPY --chown=nodejs:nodejs app/.next ./.next
COPY --chown=nodejs:nodejs node_modules ./node_modules
COPY --chown=nodejs:nodejs app/package.json ./package.json
COPY --chown=nodejs:nodejs app/next.config.js ./next.config.js

USER nodejs

EXPOSE 3000
CMD ["npm", "run", "start"]