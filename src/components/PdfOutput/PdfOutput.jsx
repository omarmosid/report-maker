import React, { Component } from 'react'

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class PdfOutput extends Component {
  render() {

    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        border: '1px solid black'
      },
      section: {
        margin: 30,
        padding: 30,
        flexGrow: 1
      },
      topMetaText: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Times-Roman'
      },
      topSubject_Name: {
        marginBottom: 15,
      },
      subjectTitleText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Times-Bold'
      },
      nameText: {
        fontSize: 12,
        fontFamily: 'Times-Roman'
      },
      labelText: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'Times-Bold',
        height: 50
      },
      labelText_commskills: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'Times-Bold',
      },
      labelText_commskills_Child: {
        fontSize: 12,
        height: 40,
        marginLeft: 30,
        textAlign: 'left',
        fontFamily: 'Times-Bold',
      },
      labelText_commskills_Child_Writing: {
        fontSize: 12,
        marginBottom: 10,
        marginLeft: 30,
        textAlign: 'left',
        fontFamily: 'Times-Bold',
      },
      labelText_commskills_Child_Child: {
        fontSize: 12,
        height: 40,
        marginLeft: 100,
        textAlign: 'left',
        fontFamily: 'Times-Bold',
      },
      inputText: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'Times-Roman'
      },
      footer: {
        position: 'absolute',
        left: 30,
        bottom: 20,
        width: '100%'
      },
      footerTextLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: 12,
        fontFamily: 'Times-Italic'
      },
      footerTextRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        fontSize: 12,
        fontFamily: 'Times-Italic'
      }
    });
    
    return (
      <Document>
        <Page
          title="student report"
          size="A4"
          wrap={true}
          style={styles.page}
        >
          <View 
            // debug={true} 
            style={styles.section}
          >
            <Text style={styles.topMetaText}>TERM 1 Report for Class IX</Text>
            
            <View style={styles.topSubject_Name}>
              <Text style={styles.subjectTitleText}>SUBJECT REPORT: LANGUAGE & LITERATURE: HINDI {" "} {" "} {" "} <Text style={styles.nameText}>{this.props.firstName}</Text></Text> 
            </View>

            <Text style={styles.labelText}>Topics taught this term: <Text style={styles.inputText}>{this.props.topicsTaught} </Text></Text>
            <Text style={styles.labelText}>Conceptual understanding: <Text style={styles.inputText}>{this.props.conUnd}</Text></Text>

            <Text style={styles.labelText_commskills}>Communication Skills:</Text>
            <Text style={styles.labelText_commskills_Child}>Listening Skills: <Text style={styles.inputText}>{this.props.listeningSkills}</Text></Text>
            <Text style={styles.labelText_commskills_Child}>Speaking Skills: <Text style={styles.inputText}>{this.props.speakingSkills}</Text></Text>
            <Text style={styles.labelText_commskills_Child}>Reading Skills: <Text style={styles.inputText}>{this.props.readingSkills}</Text></Text>
            <Text style={styles.labelText_commskills_Child_Writing}>Writing Skills:</Text>
            <Text style={styles.labelText_commskills_Child_Child}>a. Organisation and content: <Text style={styles.inputText}>{this.props.ocSkills}</Text></Text>
            <Text style={styles.labelText_commskills_Child_Child}>b. Presentation and submission: <Text style={styles.inputText}>{this.props.psSkills}</Text></Text>

            <Text style={styles.labelText}>Vocabulary and grammar: <Text style={styles.inputText}>{this.props.vocabGram}</Text></Text>
            <Text style={styles.labelText}>Classroom involvement: <Text style={styles.inputText}>{this.props.classInvolv}</Text></Text>
            <Text style={styles.labelText}>Test performance: <Text style={styles.inputText}>{this.props.testPerf}</Text></Text>
            <Text style={styles.labelText}>Suggestions regarding areas/skills to be improved: <Text style={styles.inputText}>{this.props.sugg}</Text></Text>
            <Text style={styles.labelText}>Comments: <Text style={styles.inputText}>{this.props.comments}</Text></Text>
            <View style={styles.footer}>
              <Text style={styles.footerTextLeft}>Signature of Subject Teacher</Text>
              <Text style={styles.footerTextRight}>Signature of Parent</Text>
            </View>
          </View>
        </Page>
      </Document>
    )
  }
}

export default PdfOutput
