"""Generate privacy-safe public summaries. Original supplied CVs remain private."""
import json
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT

root = Path(__file__).resolve().parent.parent
data = json.loads((root / 'tmp' / 'cv-data.json').read_text(encoding='utf-8'))
out = root / 'public' / 'cv'
out.mkdir(parents=True, exist_ok=True)
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameRT', fontName='Helvetica-Bold', fontSize=27, leading=32, textColor=colors.HexColor('#111318'), spaceAfter=6))
styles.add(ParagraphStyle(name='SubRT', fontName='Helvetica', fontSize=10, leading=15, textColor=colors.HexColor('#51584b'), spaceAfter=13))
styles.add(ParagraphStyle(name='HeadRT', fontName='Helvetica-Bold', fontSize=11, leading=16, spaceBefore=16, spaceAfter=7, textColor=colors.HexColor('#35451e')))
styles.add(ParagraphStyle(name='BodyRT', fontName='Helvetica', fontSize=9, leading=12.5, spaceAfter=5))
styles.add(ParagraphStyle(name='SmallRT', fontName='Helvetica', fontSize=8, leading=11, textColor=colors.HexColor('#53584e')))

def clean(s):
    return s.replace('&', '&amp;').replace('–','-').replace('—','-').replace('’',"'").replace('·',' | ').replace('“','"').replace('”','"')
def para(s, style='BodyRT'): return Paragraph(clean(s), styles[style])
def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#d3d2c8')); canvas.line(42,36,553,36)
    canvas.setFont('Helvetica',7); canvas.setFillColor(colors.HexColor('#53584e'))
    canvas.drawString(42,24,'Public portfolio summary | Adapted from supplied CV | Private identifiers omitted')
    canvas.drawRightString(553,24,str(doc.page)); canvas.restoreState()

for mode, title in [('technical','Technical'),('nontechnical','Business & Operations'),('technomanagerial','Techno-managerial')]:
    story = [para('G. RISHAB TEJ','NameRT'),para(title+' | MBA Digital Transformation | NMIMS Mumbai, 2025-2027','SubRT'),para('I turn ideas into things that work. Engineering foundations, business perspective, and hands-on execution across automation, marketing, research, and operations.')]
    story += [para('EXPERIENCE','HeadRT')]
    for e in data['experience']:
        story += [para('<b>'+e['company']+'</b> | '+e['date']),para(e['role']+' - '+e['text'])]
    story += [para('SELECTED PROJECTS & IMPACT','HeadRT')]
    if mode == 'technical':
        entries = [
          ('NarrativeX automation & internal tools','Built four automation operations systems; CV-reported ~90% less weekly reporting effort. Built Meta Publisher (Meta Graph API + Claude), reducing per-post publishing time by ~60% for 30+ client brands. Shipped a workforce tracker for ~40 employees on Vercel.'),
          ('Pre-Flight Creative Scoring System','Academic project trained on 13K YouTube ads using CLIP visuals, TF-IDF titles, metadata, and LightGBM. Used CNN Grad-CAM for creative diagnosis; CV reports validation on 32K Meta and Google ads. Predictive accuracy was not supplied.'),
          ('India Digital Payments Landscape Analysis','Analyzed 10 years of data across six payment rails. Built Tableau trend and forecasting visualizations of UPI adoption from 2016-2025 and projections through 2030.')]
    elif mode == 'nontechnical':
        entries = [
          ('Agency operating model | NarrativeX','Ran a seven-dimension maturity assessment and restructured a flat organization into a six-level hierarchy. Authored 15+ SOPs and a 30-day automation roadmap adopted as the agency operations playbook.'),
          ('Elder Care Digital Product Strategy & Development','Academic project: validated 10+ features through concept testing with 150+ respondents. Developed a PRD and product improvement plan covering user journeys, acceptance criteria, milestones, and implementation priorities.'),
          ('AI-enabled Social Media Operations','Academic project: automated Instagram comment moderation using n8n, Supabase, and Gemini with human-in-the-loop reply approval. Developed a Next.js/TypeScript dashboard on Vercel.')]
    else:
        entries = [
          ('NarrativeX transformation','Combined organizational redesign, 15+ SOPs, and a 30-day automation roadmap with practical publishing and reporting tools. CV reports ~90% less weekly reporting effort and ~25% higher team productivity.'),
          ('Sports-tech Go-to-Market & Monetization','Academic project: developed a GTM and monetization strategy for G-Tribe using market-gap analysis and STP. Designed promotional campaigns, partnership models, and event activations.'),
          ('Digital Marketing & Customer Journey','Academic project: designed an integrated POEM media strategy and AIDA-based funnel using buyer personas, competitor analysis, and customer pain-point mapping.')]
    for name,body in entries: story += [para('<b>'+name+'</b>'),para(body)]
    story += [para('EDUCATION','HeadRT')]
    for e in data['education']: story += [para('<b>'+e['title']+'</b> | '+e['years']+'<br/>'+e['institution'])]
    story += [para('LEADERSHIP & INTERESTS','HeadRT'),para('Campus Engagement Head, Alumni Relations Cell, NMIMS Mumbai (May 2026-present per CV): led an 83-member team supporting engagement with 31,000+ alumni. Production Lead, Virinchi (May 2023-Mar 2024): 25-member team and backstage operations for 4,000+ attendees.'),para('Interests: pickleball, poster-making, video editing, and emerging technology.'),Spacer(1,8),para('LinkedIn: <link href="https://www.linkedin.com/in/rishab-tej-2b7085219/">linkedin.com/in/rishab-tej-2b7085219</link>','SmallRT'),para('Results above are reported in the supplied CVs and have not been independently audited. This is an edited public summary, not the original institutional CV.','SmallRT')]
    doc = SimpleDocTemplate(str(out / ('rishab-tej-'+mode+'.pdf')),pagesize=(595.28,841.89),rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=48,title='Rishab Tej | '+title+' | Public CV Summary',author='G. Rishab Tej')
    doc.build(story,onFirstPage=footer,onLaterPages=footer)
    print(out / ('rishab-tej-'+mode+'.pdf'))
