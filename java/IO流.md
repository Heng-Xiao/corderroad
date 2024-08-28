# IO流
## 一、 IO流

###  1. java 中 IO 流分为几种?
Java中的IO流主要分为**字节流、字符流和按操作方式划分的节点流和处理流等**。

+ **按照流向**：可以分为输入流和输出流。输入流主要用于从源读取数据，如FileInputStream；输出流主要用于向目标写入数据，如FileOutputStream。
+ **按照操作单元**：可以划分为字节流和字符流。字节流以字节为单位进行数据的读写，常见的有InputStream和OutputStream；字符流则以字符为单位进行数据的读写，常见的有Reader和Writer。
+ **按照流的角色**：划分为节点流和处理流。节点流是直接与物理设备相连接的流，如FileInputStream；处理流是连接到其他流的流，通过节点流实现数据的传输，如BufferedInputStream。

此外，Java的IO流体系还包括了字节缓冲流和字符缓冲流，这两种流是为了提高IO操作的效率而设计的。例如，BufferedInputStream和BufferedOutputStream提供了缓冲功能，能够减少实际的物理读写次数，从而提高性能。
###  2. BIO,NIO,AIO 有什么区别?
BIO、NIO和AIO是Java处理I/O操作的三种不同模型，它们在工作方式和适用场景等方面上存在差异。具体分析如下：

1. **工作方式**：
- **BIO（Blocking I/O）**：即同步阻塞I/O，是传统的I/O模型。在此模型中，线程发起I/O请求后会被阻塞，直到数据完全被读取或写入。这种模型实现简单直观，但缺点是在等待数据时会占用大量线程资源。
- **NIO（Non-blocking I/O）**：即同步非阻塞I/O，提供了更高效的I/O操作方式。在NIO中，线程发起I/O请求后不会被阻塞，可以继续执行其他任务。当数据准备就绪时，线程再进行数据处理。这种方式减少了不必要的线程等待，提高了系统性能。
- **AIO（Asynchronous I/O）**：即异步非阻塞I/O，是最为先进的I/O模型。在AIO中，线程发起I/O请求后不仅不会被阻塞，而且不需要等待数据准备就绪的通知，因为系统会在数据准备就绪并且操作完成时通知线程。这种方式进一步解放了线程，使其能够更加专注于业务逻辑的处理。
2. **适用场景**：
- **BIO**：适用于连接数量较少且固定的场景，因为它在处理大量并发时会导致线程资源的过度消耗。
- **NIO**：适用于需要处理更多并发连接的场景，尤其是在高负载的网络应用中，可以有效减少线程的使用和管理成本。
- **AIO**：适用于对性能要求极高的场景，尤其是在I/O操作频繁且需要快速响应的应用中，可以实现更高的吞吐量和更低的延迟。
3. **技术实现**：
- **BIO**：主要使用java.io包中的类，如FileInputStream、FileOutputStream等。
- **NIO**：主要使用java.nio包中的类，如Channel、Selector等。
- **AIO**：主要使用java.nio.channels包中的AsynchronousFileChannel等。

综上所述，BIO、NIO和AIO在工作方式、适用场景和技术实现方面各有特点和优势。BIO适合连接数少的场景，操作简单直观；NIO适合处理更多并发连接，提高了I/O效率；AIO则在NIO的基础上进一步优化，提供了最佳的性能表现。
###  3. Files的常用方法都有哪些？
+ Files.exists()：检测文件路径是否存在。
+ Files.createFile()：创建文件。
+ Files.createDirectory()：创建文件夹。
+ Files.delete()：删除一个文件或目录。
+ Files.copy()：复制文件。
+ Files.move()：移动文件。
+ Files.size()：查看文件个数。
+ Files.read()：读取文件。
+ Files.write()：写入文件。