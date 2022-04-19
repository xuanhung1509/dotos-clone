import Collapsible from '../../../../components/Collapsible/Collapsible';
import './FAQ.style.scss';

function FAQ() {
  const faqList = [
    {
      id: 1,
      question: 'Is dotOS safe?',
      answer:
        "Firstly you're unlocking bootloader which is opting to lose security features from OEM [Manufactures]. if that's not your concern, rest assured you're totally safe. we have covered all security patches released by google and several security enhancements to keep you protected.",
    },
    {
      id: 2,
      question: 'Does dotOS provide OTA updates?',
      answer:
        'Yes! All our official devices have prebuilt System Updater, which notifies user when new build is available and recommends to download and install. Installation is completely automatic, you just have to sit back and give permission to install OTA.',
    },
    {
      id: 3,
      question: 'How often dotOS is updated?',
      answer:
        'All our Official devices will get montly updates with security patches implemented and features. Sometimes we make major releases with new features and Optimizations.',
    },
    {
      id: 4,
      question: 'Are Google Apps (GApps) included?',
      answer:
        "We provide two builds for every device - 'Vanilla' that doesn't include GApps and 'GApps' that includes GApps and Pixel Exclusives.",
    },
    {
      id: 5,
      question: 'My device is not supported! What should I do?!',
      answer:
        "First reason can be that our development team doesn't have your device to support it or we no maintainer applied for this device. You can always use our GSI builds if your phone supports Treble Project.",
    },
  ];

  return (
    <section id='faq' className='faq'>
      <div className='container'>
        <h2 className='heading-xl'>Frequently Asked Questions</h2>
        <p>
          Find <span className='text-primary'>answers</span> for most asked
          questions
        </p>
        <Collapsible list={faqList} />
      </div>
    </section>
  );
}

export default FAQ;
