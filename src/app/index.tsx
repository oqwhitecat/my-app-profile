import { Ionicons } from '@expo/vector-icons'; // มีมาให้ใน Expo อยู่แล้ว
import { Image, Linking, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const studentData = {
    name: "นาย ทัตพงศ์ พงศ์สุวากร",
    id: "663450039-7",
    course: "Computer and Information Science",
    github: "https://github.com/oqwhitecat", // ใส่ลิงก์ของคุณตรงนี้
    email: "tatpong.p@kkumail.com"
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* ส่วนหัวสีฟ้า (Header Background) */}
      <View style={styles.header} />

      <View style={styles.content}>
        {/* Card โปรไฟล์ */}
        <View style={styles.card}>
          <View style={styles.imageBorder}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.nameText}>{studentData.name}</Text>
          <Text style={styles.idText}>รหัสนักศึกษา: {studentData.id}</Text>
          
          <View style={styles.divider} />

          <View style={styles.infoContainer}>
            <Ionicons name="school-outline" size={20} color="#555" />
            <Text style={styles.courseText}>{studentData.course}</Text>
          </View>

          {/* ปุ่ม Github แบบสวยๆ */}
          <TouchableOpacity 
            style={styles.githubButton}
            onPress={() => openLink(studentData.github)}
          >
            <Ionicons name="logo-github" size={24} color="white" />
            <Text style={styles.buttonText}>View GitHub</Text>
          </TouchableOpacity>

          {/* ปุ่ม Email */}
          <TouchableOpacity 
            style={styles.emailButton}
            onPress={() => openLink(`mailto:${studentData.email}`)}
          >
            <Ionicons name="mail-outline" size={20} color="#555" />
            <Text style={styles.emailLabel}>Contact Me</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.footer}>Expo SDK 57 • Mobile App Project</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // สีพื้นหลังเทาอมฟ้าอ่อนๆ ดูสะอาดตา
  },
  header: {
    height: 160,
    backgroundColor: '#5DADE2', // สีฟ้าหลัก
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    // ระบบเงาสำหรับ iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // ระบบเงาสำหรับ Android
    elevation: 8,
  },
  imageBorder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: -80, // ดันรูปขึ้นไปข้างบนครึ่งหนึ่ง
    backgroundColor: '#eee',
    elevation: 5,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 65,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 15,
    textAlign: 'center',
  },
  idText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ECF0F1',
    width: '100%',
    marginVertical: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 25,
  },
  courseText: {
    fontSize: 15,
    color: '#34495E',
    textAlign: 'center',
    flexShrink: 1,
  },
  githubButton: {
    flexDirection: 'row',
    backgroundColor: '#24292E', // สีดำสไตล์ Github
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    gap: 10,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  emailButton: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    gap: 5,
  },
  emailLabel: {
    color: '#555',
    textDecorationLine: 'underline',
  },
  footer: {
    textAlign: 'center',
    paddingBottom: 20,
    color: '#BDC3C7',
    fontSize: 12,
  }
});