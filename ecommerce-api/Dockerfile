FROM maven:3.9.6-amazoncorretto-17 AS build
WORKDIR /app

COPY pom.xml .

RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

COPY mvnw .

RUN chmod +x ./mvnw

CMD ["mvn", "spring-boot:run"]