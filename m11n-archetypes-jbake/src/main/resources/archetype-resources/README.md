# m11n-archetypes-jbake

TODO: description ![Maven Central](https://img.shields.io/maven-central/v/com.github.monkeysintown/m11n-archetypes-jbake.svg)



If you just want to compile the project without running the tests:

```
mvn -DskipTests clean install
```

If you want to run the tests (Derby and H2 in server mode):

```
mvn clean install
```


You can find the latest releases here:

[ ![Download](https://api.bintray.com/packages/cheetah/monkeysintown/m11n-archetypes-jbake/images/download.svg) ](https://bintray.com/cheetah/monkeysintown/m11n-archetypes-jbake/_latestVersion)

... or setup your Maven dependencies:

```xml
<dependency>
    <groupId>com.github.monkeysintown</groupId>
    <artifactId>m11n-archetypes-jbake</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

... and configure Bintray's JCenter repository in your pom.xml:
 
```xml
...
<repositories>
    <repository>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <id>central</id>
        <name>bintray</name>
        <url>http://jcenter.bintray.com</url>
    </repository>
</repositories>
...
```

Get automatic notifications about new releases here:

[ ![Get automatic notifications about new "m11n-archetypes-jbake" versions](https://www.bintray.com/docs/images/bintray_badge_color.png) ](https://bintray.com/cheetah/monkeysintown/m11n-archetypes-jbake/view?source=watch)
