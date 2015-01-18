# ${artifactId}

TODO: description ![Maven Central](https://img.shields.io/maven-central/v/com.github.monkeysintown/${artifactId}.svg)


## Build

If you just want to compile the project without running the tests:

```
mvn -DskipTests clean install
```

If you want to run the tests (Derby and H2 in server mode):

```
mvn clean install
```

## Maven dependencies

You can find the latest releases here:

[ ![Download](https://api.bintray.com/packages/cheetah/monkeysintown/${artifactId}/images/download.svg) ](https://bintray.com/cheetah/monkeysintown/${artifactId}/_latestVersion)

... or setup your Maven dependencies:

```xml
<dependency>
    <groupId>${groupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>
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

[ ![Get automatic notifications about new "${artifactId}" versions](https://www.bintray.com/docs/images/bintray_badge_color.png) ](https://bintray.com/cheetah/monkeysintown/${artifactId}/view?source=watch)
