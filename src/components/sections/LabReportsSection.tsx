import { motion } from 'framer-motion';
import { Shield, FileText, Download, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  { name: 'FSSAI Certified', id: 'License No: XXXXXXXXXX' },
  { name: 'ISO 22000:2018', id: 'Food Safety' },
  { name: 'AGMARK Certified', id: 'Quality Standard' },
  { name: 'India Organic', id: 'NPOP Certified' },
];

const testParameters = [
  { name: 'Moisture Content', value: '< 20%', status: 'pass' },
  { name: 'HMF Level', value: '< 40 mg/kg', status: 'pass' },
  { name: 'Diastase Activity', value: '> 8 DN', status: 'pass' },
  { name: 'Sucrose Content', value: '< 5%', status: 'pass' },
  { name: 'Pollen Analysis', value: 'Multifloral', status: 'pass' },
  { name: 'Pesticide Residue', value: 'Not Detected', status: 'pass' },
  { name: 'Antibiotic Residue', value: 'Not Detected', status: 'pass' },
  { name: 'Heavy Metals', value: 'Below Limits', status: 'pass' },
];

const LabReportsSection = () => {
  return (
    <section id="lab-reports" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Quality Assurance
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-foreground"
            >
              Lab Tested for
              <span className="text-honey-gradient"> Your Trust</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Every batch of Amruth Organic Honey undergoes rigorous laboratory testing 
              by NABL-accredited facilities. We believe in complete transparency – 
              our lab reports are always available for you to verify.
            </motion.p>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3"
                >
                  <Award className="w-8 h-8 text-honey flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.id}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="btn-honey gap-2">
                <Download className="w-4 h-4" />
                Download Lab Report
              </Button>
              <Button variant="outline" className="border-forest/30 text-forest hover:bg-forest/10 gap-2">
                <FileText className="w-4 h-4" />
                View All Certificates
              </Button>
            </motion.div>
          </div>

          {/* Right - Lab Report Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-3xl overflow-hidden border-2 border-forest/20">
              {/* Header */}
              <div className="bg-forest p-6 text-cream">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6" />
                  <span className="font-medium">Quality Test Report</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold">Raw Forest Honey</h3>
                <p className="text-cream/70 text-sm mt-1">Batch: AMR-2024-001 | Tested: Dec 2024</p>
              </div>

              {/* Test parameters */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">Test Parameters</p>
                <div className="space-y-3">
                  {testParameters.map((param, index) => (
                    <motion.div
                      key={param.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="flex items-center justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-foreground">{param.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">{param.value}</span>
                        <CheckCircle className="w-4 h-4 text-forest" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Result */}
                <div className="mt-6 p-4 bg-forest/10 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Overall Result</p>
                    <p className="font-serif text-xl font-semibold text-forest">100% Pure Organic</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-cream" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabReportsSection;
