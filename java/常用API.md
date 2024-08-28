# 常用API
## 一、 String相关

###  1. 字符型常量和字符串常量的区别
在Java中，字符型常量（`char`）和字符串常量（`String`）是两种不同类型的数据，它们在内存中的存储方式和使用场景也有所不同。以下是它们之间的主要区别：

1. **数据类型**：
    - 字符型常量是基本数据类型`char`，它用于表示单个的字符。在Java中，`char`类型占用2个字节，可以存储一个Unicode字符。
    - 字符串常量是`String`类的实例，它是一个对象引用类型。字符串可以由一系列字符组成，并且可以动态地改变。

2. **存储方式**：
    - 字符型常量直接存储的是字符的Unicode值。
    - 字符串常量实际上是对`String`对象的引用，该对象存储在堆内存中，并且包含了字符数组以及与该字符串相关的其他信息（如长度、散列码等）。

3. **内存分配**：
    - 字符型常量作为基本类型，其值直接存储在它被声明的地方，例如在栈上。
    - 字符串常量作为对象，其引用存储在栈上，而实际的字符数组存储在堆上。

4. **不变性**：
    - 字符型常量的值在初始化后不能更改。
    - 字符串常量本身是不可变的，这意味着一旦创建了一个`String`对象，它的内容就不能更改。但是，可以通过创建新的`String`对象来“更改”字符串的值。

5. **性能**：
    - 由于字符型常量是基本类型，所以它们的操作通常比字符串常量更快，因为它们不需要额外的对象创建和垃圾回收。
    - 字符串常量的操作可能涉及更多的内存开销和时间，特别是在进行大量的字符串连接操作时。

6. **字面量形式**：
    - 字符型常量在代码中以单引号括起来的单个字符表示，例如 `'a'`。
    - 字符串常量在代码中以双引号括起来的字符序列表示，例如 `"hello"`。

了解这些区别对于编写高效的Java代码是非常重要的，尤其是在处理大量字符串操作时，选择合适的数据类型和操作可以避免不必要的性能开销。
###  2. 什么是字符串常量池？
字符串常量池（String Constant Pool）是Java运行时数据区的一部分，它在Java堆内存中。它主要用于存储编译时和运行时生成的字符串字面量和对它们的引用。

在Java中，当创建一个字符串常量时，JVM首先会检查字符串常量池以查看是否已经存在相同的字符串。如果存在，JVM将重用池中的现有字符串实例，而不是创建一个新的对象。这样做可以减少内存占用和提高性能，因为字符串对象可以被共享和重用。

字符串常量池是Java中一个重要的优化机制，它确保了相同内容的字符串在整个应用程序中只占用一份内存空间。这种机制也意味着字符串在Java中是不可变的，因为一旦一个字符串被创建并放入常量池，它的内容就不能更改。

例如，当我们在代码中使用如下语句：

```java
String str1 = "Hello";
String str2 = "Hello";
```

实际上，`str1`和`str2`都指向字符串常量池中的同一个字符串实例，而不是两个不同的对象。

从Java 7开始，字符串常量池被转移到了堆空间中的元空间（Metaspace），这是为了解决永久代（PermGen space）的空间限制问题，使得字符串常量池的大小只受限于系统内存的大小。
###  3. String 是最基本的数据类型吗
String 在Java中不是基本数据类型，而是一个引用类型。它实际上是对字符数组的封装，也就是对象。在Java中，基本数据类型包括八种：byte、short、int、long、float、double、char、boolean。这些类型的变量直接存储它们的值，而不是引用。相反，String和其他类（如Integer、Object等）属于引用类型，它们变量中存储的是对象在内存中的地址引用。当我们使用String str = "abc";时，实际上是在字符串常量池中查找是否已存在内容为"abc"的String对象，如果存在则返回该对象的引用给str，如果不存在则创建一个新的String对象，并将其引用返回给str。因此，String在JVM中具有特殊的处理方式，但它不是基本数据类型。
###  4. String有哪些特性
String类在Java中具有以下几种特性：

1. **不可变性**：一旦一个String对象被创建，它的内容就不能被改变。如果对String对象进行修改操作，实际上会生成一个新的String对象。
2. **可以共享使用**：由于String是不可变的，所以它是线程安全的，可以在多个线程间安全地共享而无需额外的同步措施。
3. **底层表示**：虽然我们通常将String视为字符序列，但在Java中，String的底层实现实际上是以byte数组的形式存储的，这使得它可以容纳各种字符集的字符。
4. **多种创建方式**：可以通过字面量（如`"abc"`），无参构造方法（`new String()`），以及带参数的构造方法（`new String(char[])`）等多种方式创建String对象。
5. **字符串常量池**：为了提高性能和减少内存消耗，Java提供了一个特殊的机制——字符串常量池。当创建一个新的String对象时，JVM首先会检查字符串常量池，看看是否已经存在相同的字符串，如果存在，则复用现有的对象；如果不存在，则在常量池中创建一个新的对象。
6. **序列化**：String类实现了Serializable接口，这意味着String对象可以被序列化，以便在网络上传输或者存储到文件中。
7. **性能优化**：由于String对象的不可变性和字符串常量池的存在，Java虚拟机（JVM）可以进行一些优化，比如字符串的intern()方法，它可以返回字符串常量池中的相同值，从而减少内存占用。
8. **代码表达**：String类提供了丰富的方法来处理字符串，包括长度计算、连接、比较、查找、替换等操作，这些方法使得字符串处理变得更加方便和高效。

综上所述，String类在Java中扮演着重要的角色，它的设计考虑到了安全性、效率和易用性。了解String的特性对于编写高效的Java代码至关重要。
###  5. String为什么是不可变的吗？
**String 类在 Java 中被设计为不可变的，这意味着一旦一个 String 对象被创建，它所包含的字符串内容就不能被改变**。

String 类的不可变性主要是基于以下几个原因：

1. **安全性和不变性**：String 类使用 `final` 关键字修饰其内部用于存储字符的数组，确保了一旦赋值后，引用不能被修改。同时，由于 String 类本身也被 `final` 修饰，它不能被继承，这避免了通过继承破坏其不可变性的风险。
2. **字符串常量池**：Java 中的字符串常量池是存储字符串字面量的特殊内存区域。当创建一个新的字符串时，如果该字符串已经存在于常量池中，就会直接返回对该字符串的引用，而不是创建一个新的对象。这种设计可以节省内存空间，但如果 String 是可变的，修改一个字符串可能会影响其他指向相同字符串的引用，导致不安全的情况发生。
3. **线程安全**：由于 String 对象是不可变的，它们可以被看作是不可变常量，因此是线程安全的。多个线程访问同一个 String 对象不需要额外的同步措施，因为它们无法更改对象的状态。
4. **性能考虑**：每次对 String 类型进行修改时，实际上都会生成一个新的 String 对象，而原有的对象则等待垃圾回收。这种设计简化了字符串的处理，因为不需要担心字符串在执行过程中被修改。与之相对的是，如 `StringBuilder` 和 `StringBuffer` 这样的可变类，它们在执行字符串拼接等操作时会直接修改对象本身，而不是创建新的对象。

综上所述，String 类的不可变性是 Java 语言设计中的一个基本特性，它有助于提高安全性、线程安全和性能。
###  6. String真的是不可变的吗？
我觉得如果别人问这个问题的话，回答不可变就可以了。 下面只是给大家看两个有代表性的例子：

+ String不可变但不代表引用不可以变
```java
String str = "Hello";
str = str + " World";
System.out.println("str=" + str);
```
结果： str=Hello World

解析： 实际上，原来String的内容是不变的，只是str由原来指向"Hello"的内存地址转为指向"Hello World"的内存地址而已，也就是说多开辟了一块内存区域给"Hello World"字符串。
+ 通过反射是可以修改所谓的“不可变”对象
```java
// 创建字符串"Hello World"， 并赋给引用s
 String s = "Hello World";
 System.out.println("s = " + s); // Hello World
 // 获取String类中的value字段
 Field valueFieldOfString = String.class.getDeclaredField("value");
// 改变value属性的访问权限
valueFieldOfString.setAccessible(true);
// 获取s对象上的value属性的值
char[] value = (char[]) valueFieldOfString.get(s);
// 改变value所引用的数组中的第5个字符
value[5] = '_';
System.out.println("s = " + s); // Hello_World
```
结果： s = Hello World s = Hello_World

解析： 用反射可以访问私有成员， 然后反射出String对象中的value属性， 进而改变通过获得的value引用改变数组的结构。但是一般我们不会这么做，这里只是简单提一下有这个东西。
###  7. 是否可以继承 String 类
String 类是 final 类，不可以被继承。
###  8. String str="i"与 String str=new String(“i”)一样吗？
不一样，因为内存的分配方式不一样。String str="i"的方式，java 虚拟机会将其分配到常量池中； 而 String str=new String(“i”) 则会被分到堆内存中。
###  9. String s = new String(“xyz”);创建了几个字符串对象
两个对象，一个是静态区的"xyz"，一个是用new创建在堆上的对象。
```java
String str1 = "hello"; //str1指向静态区 
String str2 = new String("hello"); //str2指向堆上的对象
String str3 = "hello"; 
String str4 = new String("hello"); 
System.out.println(str1.equals(str2));//true 
System.out.println(str2.equals(str4)); //true 
System.out.println(str1 == str3); //true
System.out.println(str1 == str2); //false 
System.out.println(str2 == str4); //false
System.out.println(str2 == "hello"); //false 
str2 = str1; 
System.out.println(str2 == "hello");//true
```
###  10. 如何将字符串反转？
在Java中，将字符串反转有多种方法。以下是几种常见的方法：

1. **使用StringBuilder或StringBuffer的reverse()方法**：
    - `StringBuilder`和`StringBuffer`类都提供了`reverse()`方法，可以用于反转字符串。首先，需要创建一个`StringBuilder`或`StringBuffer`对象，并将字符串传入构造函数。然后，调用`reverse()`方法即可得到反转后的字符串。

2. **使用String的split()方法与Arrays类的asList()和stream()方法**：
    - 利用`String`类的`split()`方法将字符串拆分为字符数组，然后使用`Arrays`类的`asList()`方法将数组转换为列表。接着，通过`Collections.reverse()`方法反转列表的顺序。最后，使用`stream()`和`collect()`方法将列表中的字符拼接成新的字符串。

3. **使用递归方法**：
    - 递归是一种经典的反转字符串的方法。通过递归地将字符串的第一个字符移到最后，直到整个字符串被反转完毕。

4. **使用循环方法**：
    - 通过循环遍历字符串，从第一个字符开始，将其依次与后续的字符交换位置，直到达到字符串的中间位置。这种方法需要逐个交换字符的位置。

这些方法各有特点，选择哪种方法取决于具体的应用场景和个人喜好。需要注意的是，由于String本身是不可变的，因此无论采用哪种方法，都会返回一个新的反转后的字符串对象，而原始字符串保持不变。
###  11. 数组有没有 length()方法？String 有没有 length()方法
数组没有 length()方法 ，有 length 的属性。String 有 length()方法。JavaScript中，获得字符串的
长度是通过 length 属性得到的，这一点容易和 Java 混淆。
###  12. String 类的常用方法都有那些？
以下是String类的常用方法：

1. **length()**: 返回字符串的长度，即字符个数。
2. **equals(String anotherString)**: 判断两个字符串是否内容完全相同，区分大小写。如果相同则返回true，否则返回false。
3. **equalsIgnoreCase(String anotherString)**: 同上，但不区分大小写。
4. **startsWith(String prefix)**: 判断字符串是否以指定的前缀开始。是则返回true，否则返回false。
5. **endsWith(String suffix)**: 判断字符串是否以指定的后缀结束。是则返回true，否则返回false。
6. **trim()**: 去掉字符串两端的空白字符。
7. **replaceAll(String target, String replacement)**: 将字符串中所有出现的指定字符或子字符串替换成另一个。
8. **charAt(int index)**: 获取字符串在指定位置的字符。
9. **split(String regex)**: 根据给定的正则表达式将字符串拆分为子字符串数组。

除了上述提到的方法，String类还提供了其他有用的功能，如复制和赋值、查找特定字符或子字符串、比较字符串等。这些方法使得对字符串的处理变得非常灵活和方便。
###  13. 在使用 HashMap 的时候，用 String 做 key 有什么好处？
HashMap 内部实现是通过 key 的 hashcode 来确定 value 的存储位置，因为字符串是不可变的， 所以当创建字符串时，它的 hashcode 被缓存下来，不需要再次计算，所以相比于其他对象更 快。
###  14. String和StringBuffer、StringBuilder的区别是什么？String为什么是不可变的
1. **可变性**:String类中使用字符数组保存字符串，private final char value[]，所以string对象是不可变 的。StringBuilder与StringBuffer都继承自AbstractStringBuilder类，在AbstractStringBuilder中 也是使用字符数组保存字符串，char[] value，这两种对象都是可变的。

2. **线程安全性**:String中的对象是不可变的，也就可以理解为常量，线程安全。AbstractStringBuilder是 StringBuilder与StringBuffer的公共父类，定义了一些字符串的基本操作，如expandCapacity、 append、insert、indexOf等公共方法。StringBuffer对方法加了同步锁或者对调用的方法加了同 步锁，所以是线程安全的。StringBuilder并没有对方法进行加同步锁，所以是非线程安全的。

3. **性能**:每次对String 类型进行改变的时候，都会生成一个新的String对象，然后将指针指向新的String 对象。StringBuffer每次都会对StringBuffer对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用StirngBuilder 相比使用StringBuffer 仅能获得10%~15% 左右的性能提升，但却要冒多线程不安全的风险。

4. **对于三者使用的总结**:
    - 如果要操作少量的数据用 = String
    - 单线程操作字符串缓冲区 下操作大量数据 = StringBuilder
    - 多线程操作字符串缓冲区 下操作大量数据 = StringBuffer
## 二、 Date相关
###  1. 在使用 HashMap 的时候，用 String 做 key 有什么好处？
## 三、 包装类相关
###  1. 自动装箱与拆箱
- 装箱：将基本类型用它们对应的引用类型包装起来；
- 拆箱：将包装类型转换为基本数据类型；
###  2. int 和 Integer 有什么区别
`int`和`Integer`在Java中都是用来表示整数的数据类型，但它们之间存在一些关键的区别。具体如下：

1. **基本数据类型与引用类型**：`int`是Java的一种基本数据类型，直接存储在栈内存中，只包含一个值，没有方法或属性。而`Integer`是一个类，它是`int`的包装类（Wrapper Class），用于将基本类型转换为引用类型。`Integer`对象在堆内存中创建，并且可以拥有方法和属性。
2. **默认值**：`int`作为基本类型，其变量的默认值是0。相反，`Integer`作为引用类型，它的变量默认值为`null`。
3. **内存占用**：由于`Integer`是一个对象，需要存储对象的元数据，因此它占用的内存比`int`多。`int`作为原始类型的数据，占用的空间更少。
4. **比较方式**：基本类型的`int`可以使用“==”进行比较。对于`Integer`对象，应使用`equals()`方法进行比较，因为“==”比较的是引用而不是值。
5. **自动装箱与拆箱**：Java提供了自动装箱与拆箱的功能，可以在需要的时候自动将`int`转换为`Integer`，或者将`Integer`转换为`int`。这使得在很多情况下，即使使用了包装类也不会感到太大差异。
6. **泛型限制**：Java的泛型不支持基本类型，因此在某些需要使用泛型的情况下，只能使用`Integer`而不能使用`int`。

综上所述，虽然`int`和`Integer`都可以用来表示整数，但它们在类型、默认值、内存占用、比较方式、自动装箱与拆箱以及泛型限制上有所不同。理解这些区别有助于更好地选择和使用这两种数据类型。
###  3. Integer a= 127 与 Integer b = 127相等吗
- 对于对象引用类型：==比较的是对象的内存地址。
- 对于基本数据类型：==比较的是值。
  如果整型字面量的值在 **-128到127**之间，那么自动装箱时不会new新的Integer对象，而是直接引用常量池中的Integer对象，超过范围 a1==b1的结果是false

```java
public static void main(String[] args) {
Integer a = new Integer(3);
Integer b = 3;  // 将3自动装箱成Integer类型
int c = 3;
System.out.println(a == b); // false 两个引用没有引用同一对象
System.out.println(a == c); // true a自动拆箱成int类型再和c比较
System.out.println(b == c); // true
Integer a1 = 128;
Integer b1 = 128;
System.out.println(a1 == b1); // false
Integer a2 = 127;
Integer b2 = 127;
System.out.println(a2 == b2); // true
}
```