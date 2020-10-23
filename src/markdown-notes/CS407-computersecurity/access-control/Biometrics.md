# Biometrics

A biometric is a sufficiently distincitve trait that can be used to authenticate a person. Biometrics are split into two categories:

1. Physical
2. Behavioural

 They can be used for both verifcation and identification.

## Accuracy

 When discussing biometrics, the ideal scenario is that it lets you in 100% of the time, with the utmost certainty that you are who you say you are. This is not always the case.
We need to look at examples when the system:

1. Lets you in although it shouldn't
   * False accept rate. We want this to be low.
2. Doesn't let you in although it should.
   * False reject rate. We want this to be low.
3. Doesn't let you in, and it shouldn't.
   * This is the true reject rate. We want this to be high.
4. Lets you in and it should.
   * This is the true accept rate. We want this to be high.

We can plot these metrics.
ROC - Receiver Operator Characteristic Curve
![enter image description here](https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/ROC-Curve-Plot-for-a-No-Skill-Classifier-and-a-Logistic-Regression-Model.png)
We want the orange curve to be as close as possible to the top left.

## Biometric Examples

### Facial Recognition

Getting a computer to check an image bit-by-bit doesn't work for this. We work off the basis of a user's facial geometry. We compare facial features and how they relate to each other, and we store this information. When authentication occurs, the system extracts those features again and references them against the recorded ones. This is highly mathematical, and really isn't too great for secure authentication.

### Iris Scans

Iris patterns between people are very different. It stays the same throughout a person's lifetime. Another benefit is that it's very complex colour-wise and pattern-wise, and thus it's highly accurate. Iris scanning claimed to producet 1 in 1-2 million false positives.

#### Iris Enrolment

* Infra-red camera takes pictures of the eye
* Pattern of the iris is extracted and analysed resulting in coordinates
* These are used to make comparisons upon verification

#### Iris Verification

* Exactly the same, features are extracted then compared with the existing dataset. There's a threshold for acceptance here.

### Retina scan

This one is way more invasive than an iris scan, and can change over time with disease. It is very accurate, though.

#### Retina Enrolment

* Scan is completed in low light
* Requires special expensive equipment
* Features of the network of blood vessels formed into template

#### Retina Verification

* Scan is executed,  features extracted and compared with stored template.

### Fingerprint Authentication

A fingerprint consists of ridge lines and valleys. These form arches, loops and whorls (features).
A scan can be impacted by wet fingers, age, scarring, burning and can be fooled. There are about 1 in 100,000 false positives.

## Behavioural Biometrics

In contrast to traditional biometrics, these metrics are used from your behaviour. Examples of these are Gait Analysis, or the way you type. Because of the variables and factors that come with Behaviour biometrics, this isn't too good for security.

**Voice Recognition** is a mix of both behavioural and traditional.

**Acceptabality** is always something to think about when choosing a biometric system of authentication.
