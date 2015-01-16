# Monkeys in Town Archetypes

## Java

mvn archetype:generate                                  \
  -DarchetypeGroupId=com.github.monkeysintown           \
  -DarchetypeArtifactId=m11n-archetypes-single          \
  -DarchetypeVersion=1.0.1                              \
  -DgroupId=<my.groupid>                                \
  -DartifactId=<my-artifactId>                          \
  -Dversion=1.0.0-SNAPSHOT

## AngularJs

mvn archetype:generate                                  \
  -DarchetypeGroupId=com.github.monkeysintown           \
  -DarchetypeArtifactId=m11n-archetypes-angularjs       \
  -DarchetypeVersion=1.0.1                              \
  -DgroupId=<my.groupid>                                \
  -DartifactId=<my-artifactId>                          \
  -Dversion=1.0.0-SNAPSHOT

## Configuration

Configure Bintray's JCenter repository in your pom.xml:
 
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

Latest release:

[ ![Download](https://api.bintray.com/packages/cheetah/monkeysintown/m11n-archetypes/images/download.svg) ](https://bintray.com/cheetah/monkeysintown/m11n-archetypes/_latestVersion)

Get automatic notifications about new releases here:

[ ![Get automatic notifications about new "m11n-archetypes" versions](https://www.bintray.com/docs/images/bintray_badge_color.png) ](https://bintray.com/cheetah/monkeysintown/m11n-archetypes/view?source=watch)
